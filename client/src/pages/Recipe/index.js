import React from 'react'
import Hero from '../../components/common/Hero'
import Section from '../../components/common/Section'
import PageNotFound from '../PageNotFound'
import Info from './Info'
import Text from '../../components/common/Text'

class Single extends React.Component {
  state = {
    isLoading: true,
    hasError: false,
  }

  componentDidMount() {
    const { recipeStore, match } = this.props

    recipeStore.currentRecipeSlug = match.params.slug
    recipeStore
      .fetchRecipeBySlug(match.params.slug)
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
        <Hero image={recipe.image} />
        <Info recipe={recipe} />
        <Section>
          <div>
            <h2>Det här behöver du</h2>
            <ul>
              {Object.keys(recipe.ingredients).map(key => (
                <li key={recipe.ingredients[key].id}>
                  <b>{recipe.ingredients[key].amount}</b>&nbsp;
                  <span>
                    {recipe.ingredients[key].unit} {recipe.ingredients[key].title}
                  </span>
                </li>
              ))}
            </ul>
            <h2>Så här gör du</h2>
            <ul>
              <li>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique
                  voluptate, optio culpa quo totam? Excepturi natus sapiente atque.
                </Text>
              </li>
              <li>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique
                  voluptate, optio culpa quo totam? Excepturi natus sapiente atque.
                </Text>
              </li>
              <li>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique
                  voluptate, optio culpa quo totam? Excepturi natus sapiente atque.
                </Text>
              </li>
            </ul>
          </div>
        </Section>
      </main>
    )
  }
}

export default Single
