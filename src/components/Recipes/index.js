import React from 'react'
import { observer } from 'mobx-react'
import Card from '../Card'
import Section from '../Section'
import { Grid, Column } from '../Grid'


const Recipes = (props) => {
  const data = props.store.json
  const columns = Object.keys(data).map(key => (
    <Column key={key} small="6" large="4">
      <Card {...data[key]} />
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

export default observer(Recipes)
