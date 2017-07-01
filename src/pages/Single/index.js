import React from 'react'
import { observer, inject } from 'mobx-react'
import Hero from '../../components/common/Hero'
import Section from '../../components/common/Section'
import { Grid, Column } from '../../components/common/Grid'
import PageNotFound from '../PageNotFound'
import style from './style.scss'
import Info from './components/Info'

@inject('recipeStore')
@observer
class Single extends React.Component {
  state = {
    isLoading: true,
    hasError: false,
  }

  componentDidMount() {
    const { recipeStore, match } = this.props

    recipeStore.currentRecipeSlug = match.params.slug
    recipeStore.fetchRecipeBySlug(match.params.slug)
      .then(() => {
        this.setState({ isLoading: false })
      })
      .catch(() => {
        this.setState({ isLoading: false, hasError: true })
      })
  }

  render() {
    const { recipeStore } = this.props
    const recipe = recipeStore.entities[recipeStore.currentEntityKey]

    if (this.state.isLoading) return <h1>Laddar...</h1>
    if (!recipe) return <PageNotFound />

    return (
      <main>
        <Hero>
          <h1>{recipe.title}</h1>
          <Info recipe={recipe} />
        </Hero>
        <Section>
          <Grid>
            <Column small="12" large="6" className={style.figure}>
              <img src={recipe.image} alt={recipe.title} />
            </Column>
            <Column small="12" large="6" className={style.column}>
              <div className={style.information}>
                <h2>Det här behöver du</h2>
                <ul className={style.ingredientsList}>
                  {
                    Object.keys(recipe.ingredients).map(key => (
                      <li key={recipe.ingredients[key].id} className={style.ingredient}>
                        <b>{recipe.ingredients[key].amount}</b>&nbsp;
                        <span>{recipe.ingredients[key].unit} {recipe.ingredients[key].title}</span>
                      </li>
                    ))
                  }
                </ul>
                <h2>Så här gör du</h2>
                <ul className={style.instructions}>
                  <li className={style.instruction}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam,
                      similique voluptate, optio culpa quo totam?
                      Excepturi natus sapiente atque.</p>
                  </li>
                  <li className={style.instruction}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam,
                      similique voluptate, optio culpa quo totam?
                      Excepturi natus sapiente atque.</p>
                  </li>
                  <li className={style.instruction}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam,
                      similique voluptate, optio culpa quo totam?
                      Excepturi natus sapiente atque.</p>
                  </li>
                </ul>
              </div>
            </Column>
          </Grid>
        </Section>
      </main>
    )
  }
}

export default Single
