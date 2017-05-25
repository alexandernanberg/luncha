import React from 'react'
import Hero from '../../components/Hero'
import Recipes from '../../components/Recipes'

const Index = () => (
  <div>
    <Hero>
      <h1>Luncha hjälper dig att hitta nya
        recept och inspirera ditt matlagande <span role="img" aria-label="pizza">🍕</span></h1>
    </Hero>
    <Recipes />
  </div>
)

export default Index
