import React from 'react'
import Hero from '../../components/common/Hero'
import Recipes from '../../components/Recipes'

const Index = () => (
  <main>
    <Hero>
      <h1>Upptäck nya recept och planera ditt matlagande enkelt <span role="img" aria-label="pizza">🍕</span></h1>
    </Hero>
    <Recipes />
  </main>
)

export default Index
