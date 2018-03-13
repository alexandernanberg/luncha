import React from 'react'
import isEmpty from 'lodash/isEmpty'
import Card from './common/Card'
import Container from './common/Container'
import { media } from '../style'

const Grid = Container.extend`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;

  ${media.small`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  `};
`

const placeholderEntities = Array.from({ length: 6 }).reduce(
  (acc, curr, index) => ({
    ...acc,
    [`recipe-card-${index}`]: { placeholder: true },
  }),
  {},
)

class Recipes extends React.Component {
  componentDidMount() {
    this.props.recipeStore.fetchRecipes()
  }

  render() {
    const { recipeStore } = this.props
    let { entities } = recipeStore
    if (isEmpty(entities)) {
      entities = placeholderEntities
    }

    const recipes = Object.keys(entities).map(key => <Card key={key} {...entities[key]} />)

    return <Grid>{recipes}</Grid>
  }
}

export default Recipes
