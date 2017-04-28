import React from 'react'
import Card from '../Card'
import Section from '../Section'
import { Grid, Column } from '../Grid'

const Recipes = (props) => {
  const columns = props.store.recipes.map(r => (
    <Column key={r.id} small="6" medium="6" large="4">
      <Card {...r} />
    </Column>
  ))

  return (
    <Section>
      <Grid>
        {columns}
      </Grid>
    </Section>
  )
}

export default Recipes