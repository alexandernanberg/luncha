import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from './common/Container'
import Nav from './Nav'
import HeaderProfile from './HeaderProfile'
import { media } from '../style'
import Logo from './common/Logo'

const Header = styled.header`
  position: sticky;
  z-index: 9;
  top: 0;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px var(--gray200);
  backface-visibility: hidden;
`

export default () => (
  <Header>
    <Link to="/">
      <Logo height="44px" />
    </Link>
  </Header>
)
