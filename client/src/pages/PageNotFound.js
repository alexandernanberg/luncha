import React from 'react'
import Page from '../components/Page'
import Hero from '../components/common/Hero'
import { H1 } from '../components/common/Title'
import Container from '../components//common/Container'

export default () => (
  <Page title="Sidan hittades inte">
    <Hero>
      <Container>
        <H1>
          404 – Ojdå sidan hittades inte&nbsp;
          <span role="img" aria-label="oops">😳</span>
        </H1>
      </Container>
    </Hero>
  </Page>
)
