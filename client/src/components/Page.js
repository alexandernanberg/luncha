import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Page = styled.div`
  flex-grow: 1;
`

export default ({ children, title }) => (
  <Page>
    <Helmet
      title={title}
    />
    {children}
  </Page>
)
