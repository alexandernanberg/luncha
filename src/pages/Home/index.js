import React from 'react'
import { observer } from 'mobx-react'
import Hero from '../../components/Hero'
import Recipes from '../../components/Recipes'
import store from '../../stores/RecipesStore'

const Index = () => (
  <div>
    <Hero>
      <h1>Luncha hjälper dig att hitta nya
        recept och inspirera ditt matlagande <span role="img" aria-label="pizza">🍕</span></h1>
    </Hero>
    <Recipes store={store} />
  </div>
)

export default observer(Index)
