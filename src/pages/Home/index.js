import React from 'react'
import { observer } from 'mobx-react'
import Hero from '../../components/Hero'
import Grid from '../../components/Grid'
import store from '../../stores/RecipesStore'

const Index = () =>
  <div>
    <Hero>
      <h1>Luncha hjälper dig att hitta nya
        recept och inspirera ditt matlagande 🍕</h1>
    </Hero>
    <Grid store={store} />
  </div>


export default observer(Index)
