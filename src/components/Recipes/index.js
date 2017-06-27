import React from 'react'
import { observer, inject } from 'mobx-react'
import Card from '../common/Card'
import Section from '../common/Section'
import { Grid, Column } from '../common/Grid'

const RecipeColumn = props => (
  <Column small="6" large="4">
    <Card {...props} />
  </Column>
)

@inject('recipeStore')
@observer
class Recipes extends React.Component {
  componentDidMount() {
    this.props.recipeStore.fetchRecipes()
  }

  render() {
    const { recipeStore } = this.props
    let entities = recipeStore.entities

    if (!Object.keys(entities).length) {
      entities = [...Array(6).keys()].reduce((acc, curr, index) => {
        acc[index] = { placeholder: true }
        return acc
      }, {})
    }

    const recipes = Object.keys(entities).map(key => (
      <RecipeColumn key={key} {...entities[key]} />
    ))

    return (
      <Section>
        <Grid>
          {recipes}
        </Grid>
      </Section>
    )
  }
}

export default Recipes
