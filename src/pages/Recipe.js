import React from 'react'
import { observer, inject } from 'mobx-react'
import Hero from '../components/common/Hero'
import Section from '../components/common/Section'
import NotFound from './NotFound'
import Info from '../components/RecipeInfo'

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
    if (!recipe) return <NotFound />

    return (
      <main>
        <Hero>
          <h1>{recipe.title}</h1>
          <Info recipe={recipe} />
        </Hero>
        <Section>
          <img src={recipe.image} alt={recipe.title} />
          <div>
            <h2>Det här behöver du</h2>
            <ul>
              {
                Object.keys(recipe.ingredients).map(key => (
                  <li key={recipe.ingredients[key].id}>
                    <b>{recipe.ingredients[key].amount}</b>&nbsp;
                    <span>{recipe.ingredients[key].unit} {recipe.ingredients[key].title}</span>
                  </li>
                ))
              }
            </ul>
            <h2>Så här gör du</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam,
                  similique voluptate, optio culpa quo totam?
                  Excepturi natus sapiente atque.</p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam,
                  similique voluptate, optio culpa quo totam?
                  Excepturi natus sapiente atque.</p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam,
                  similique voluptate, optio culpa quo totam?
                  Excepturi natus sapiente atque.</p>
              </li>
            </ul>
          </div>
        </Section>
      </main>
    )
  }
}

export default Single
