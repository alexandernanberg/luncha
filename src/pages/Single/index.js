import React from 'react'
import { observer } from 'mobx-react'
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
    console.log(this.item)
  }

  item = null

  render() {
    if (!this.item) return <PageNotFound />

    // {
    //   recipe.ingredients.map(i => (
    //     <li key={i.id} className={style.ingredient}>
    //       <b>{i.amount}</b> <span>{i.unit} {i.title}</span>
    //     </li>
    //   ))
    // }

    const recipe = this.item

    return (
      <div>
        <Hero>
          <h1>{recipe.title}</h1>
          <Info recipe={recipe} />
        </Hero>
        <Section>
          <Grid>
            <Column small="12" large="6" className={style.figure}>
              <img src={this.item.image} alt={this.item.title} />
            </Column>
            <Column small="12" large="6" className={style.column}>
              <div className={style.information}>
                <h2>Det här behöver du</h2>
                <ul className={style.ingredientsList}>

                </ul>
                <h2>Så här gör du</h2>
                <ul className={style.instructions}>
                  <li className={style.instruction}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p></li>
                  <li className={style.instruction}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p></li>
                  <li className={style.instruction}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p></li>
                </ul>
              </div>
            </Column>
          </Grid>
        </Section>
      </div>
    )
  }
}

export default observer(Single)
