import React from 'react'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import { Grid, Column } from '../../components/Grid'
import PageNotFound from '../PageNotFound'
import store from '../../stores/RecipesStore'
import style from './style.scss'
import Info from './components/Info'

class Single extends React.Component {
  componentWillMount() {
    const slug = this.props.match.params.slug
    this.item = store.getRecipeBySlug(slug)
  }

  item = null

  render() {
    if (!this.item) {
      return <PageNotFound />
    }

    const recipe = this.item

    return (
      <div>
        <Hero>
          <h1>{recipe.name}</h1>
          <Info recipe={recipe} />
        </Hero>
        <Section>
          <Grid>
            <Column className={style.column}>
              <div className={style.information}>
                <h2>Det här behöver du</h2>
                <ul className={style.ingredientsList}>
                  { recipe.ingredients.map(i =>
                    <li key={i.id} className={style.ingredient}>
                      <b>{i.amount}</b> <span>{i.unit} {i.name}</span>
                    </li>) }
                </ul>
                <h2>Så här gör du</h2>
                <ul className={style.instructions}>
                  <li className={style.instruction}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p></li>
                  <li className={style.instruction}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p></li>
                  <li className={style.instruction}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p></li>
                </ul>
              </div>
            </Column>
            <Column className={style.column}>
              <figure className={style.figure}>
                <img src={this.item.image} alt="" />
              </figure>
            </Column>
          </Grid>
        </Section>
      </div>
    )
  }
}

export default Single
