import React from 'react'
import Hero from '../components/common/Hero'
import Title from '../components/common/Title'
import Container from '../components//common/Container'

const NotFound = () => (
  <Hero>
    <Container>
      <Title.H1>
        404 – Ojdå sidan hittades inte&nbsp;
        <span role="img" aria-label="oops">😳</span>
      </Title.H1>
    </Container>
  </Hero>
)

export default NotFound
