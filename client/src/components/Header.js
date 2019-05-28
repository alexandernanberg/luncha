import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { rgba } from 'polished'
import Icon from './common/Icon'
import Container from './common/Container'
import Nav from './Nav'
import HeaderProfile from './HeaderProfile'
import { colors, media } from '../style'

const Header = styled.header`
  position: sticky;
  z-index: 9;
  top: 0;
  background: linear-gradient(
    to bottom right,
    ${colors.orange500},
    ${colors.red400}
  );
  box-shadow: 0 0 16px ${rgba('black', 0.12)};
  backface-visibility: hidden;
`

const Top = Container.extend`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Logo = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 12px 0 0;
  color: white;
  font-size: 3.2rem;
  text-decoration: none;

  ${media.small`
    margin-bottom: 12px;
  `}

  & span {
    margin-left: 8px;
    font-size: 2rem;
    font-weight: 500;
  }
`

export default () => (
  <Header>
    <Top>
      <Logo to="/">
        <Icon name="logo" />
        <span>Luncha</span>
      </Logo>
      <HeaderProfile />
    </Top>
    <Nav />
  </Header>
)
