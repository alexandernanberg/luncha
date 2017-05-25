import React from 'react'
import { observer, inject } from 'mobx-react'
import { v4 } from 'uuid'
import Card from '../Card'
import Section from '../Section'
import { Grid, Column } from '../Grid'

const RecipeColumn = props => (
  <Column small="6" large="4">
    <Card {...props} />
  </Column>
)

const Recipes = ({ recipeStore }) => {
  let data = recipeStore.entities
  // let data = {}

  if (!Object.keys(data).length) {
    data = [...Array(6).keys()].reduce((acc) => {
      acc[v4()] = { placeholder: true }
      return acc
    }, {})
  }

  console.log(data)

  const recipes = Object.keys(data).map(key => (
    <RecipeColumn key={key} {...data[key]} />
  ))

  return (
    <Section>
      <Grid>
        {recipes}
      </Grid>
    </Section>
  )
}

export default inject('recipeStore')(observer(Recipes))
