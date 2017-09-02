import React from 'react'
import Hero from '../components/common/Hero'
import Recipes from '../components/RecipeList'
import Title from '../components/common/Title'
import Container from '../components/common/Container'

const Index = () => (
  <div>
    <Hero>
      <Container>
        <Title.H1>Upptäck nya recept. Planera din matlagning. Enkelt. <span role="img" aria-label="pizza">🍕</span></Title.H1>
      </Container>
    </Hero>
    <Recipes />
  </div>
)

export default Index
