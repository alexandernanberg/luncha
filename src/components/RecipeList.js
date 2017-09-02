import React from 'react'
import { observer, inject } from 'mobx-react'
// import styled from 'styled-components'
import Card from './common/Card'
import Container from './common/Container'
import Section from './common/Section'
import { media } from '../constants'

const Grid = Container.extend`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;

  ${media.small`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  `}
`

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
      entities = [...Array(3).keys()].reduce((acc, curr, index) => {
        acc[index] = { placeholder: true }
        return acc
      }, {})
    }

    const recipes = Object.keys(entities).map(key => (
      <Card key={key} {...entities[key]} />
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
