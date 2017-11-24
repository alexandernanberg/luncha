import React from 'react'
import Page from '../components/Page'
import Container from '../components/common/Container'
import Section from '../components/common/Section'
import Recipes from '../components/RecipeList'
import { H1 } from '../components/common/Title'

const Home = () => (
  <Page>
    <Section>
      <Container>
        <H1>Upptäck nya recept</H1>
      </Container>
      <Recipes />
    </Section>
  </Page>
)

export default Home
