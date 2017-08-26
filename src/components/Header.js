import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { rgba } from 'polished'
import Icon from './common/Icon'
import Nav from './Nav'
import { colors } from '../utils/style'

const StyledHeader = styled.header`
  position: static;
  top: 0;
  display: flex;
  flex-flow: column wrap;
  align-items: start;
  background-color: ${colors.gray100};
  box-shadow: 0 0 16px ${rgba('black', 0.12)}
`

const Header = () => (
  <StyledHeader>
    <div>
      <Link to="/">
        <Icon name="logo" />
      </Link>
    </div>
    <Nav />
  </StyledHeader>
)

export default Header
