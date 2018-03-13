import React from 'react'
import styled from 'styled-components'
import { colors } from '../style'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding: 16px 32px;
`

const P = styled.p`
  font-size: 1.3rem;
  color: ${colors.gray500};
`

const Footer = () => (
  <StyledFooter>
    <P>&copy; {new Date().getFullYear()} luncha.co</P>
  </StyledFooter>
)

export default Footer
