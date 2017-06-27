import React from 'react'
import { observer, inject } from 'mobx-react'
import axios from 'axios'
import shortid from 'shortid'
import Card from '../common/Card'
import Section from '../common/Section'
import { Grid, Column } from '../common/Grid'

const RecipeColumn = props => (
  <Column small="6" large="4">
    <Card {...props} />
  </Column>
)

const Recipes = ({ recipeStore }) => {
  let data = recipeStore.entities

  axios('https://api.luncha.co/v1/recipes')
    .then((res) => {
      console.log(res.data)
    })
    .catch(err => console.error(err))

  if (!Object.keys(data).length) {
    data = [...Array(6).keys()].reduce((acc) => {
      acc[shortid()] = { placeholder: true }
      return acc
    }, {})
  }

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
