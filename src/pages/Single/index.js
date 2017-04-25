import React from 'react'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import { Grid, Column } from '../../components/Grid'
import Icon from '../../components/Icon'
import PageNotFound from '../PageNotFound'
import store from '../../stores/RecipesStore'
import style from './style.scss'

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
          <ul className={style.list}>
            <li className={style.listItem}>
              <h4><Icon name="time" /><span><b>{recipe.time}</b> min</span></h4>
            </li>
            <li className={style.listItem}>
              <h4><Icon name="serving" /><span><b>{recipe.servings}</b> pers</span></h4>
            </li>
            <li className={style.listItem}>
              <h4><Icon name="star" /><span><b>{recipe.rating}</b> av 5</span></h4>
            </li>
          </ul>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.</p>
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
