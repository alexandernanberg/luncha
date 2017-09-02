import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 16px 32px;
`

const P = styled.p`
  font-size: 1.3rem;
  color: ${colors.gray400};
`

const Footer = () => (
  <StyledFooter>
    <P>&copy; {new Date().getFullYear()} luncha.co</P>
  </StyledFooter>
)

export default Footer
