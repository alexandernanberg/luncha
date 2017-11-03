import React from 'react'
import { NavLink as RouterLink, withRouter } from 'react-router-dom/es'
import { observer, inject } from 'mobx-react'
import { v4 } from 'uuid'
import styled from 'styled-components'
import BaseContainer from './common/Container'
import { media } from '../constants'

const StyledNav = styled.nav`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

const Container = BaseContainer.extend`
  width: 100%;
`

const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex-shrink: 0;
`

const NavItem = styled.li`
  flex-shrink: 0;
  margin-right: 24px;

  ${media.small`
    margin-right: 32px;
  `}
`

const NavLink = styled(RouterLink)`
  position: relative;
  display: block;
  padding: 16px 0;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  transition: all 120ms ease-out;

  &:hover,
  &:focus {
    color: white;
    outline: none;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    margin: 0 auto;
    max-width: 32px;
    background-color: rgba(255, 255, 255, 0);
    transition: all 120ms ease-out;
  }

  &.${props => props.activeClassName} {
    color: white;

    &::after {
      background-color: white;
    }
  }
`

const Nav = (props) => {
  const { userStore, location } = props
  let routes = [
    { exact: true, to: '/', name: 'Hem' },
    { to: '/recipes', name: 'Recept' },
    { to: '/list', name: 'Inköpslista' },
  ]

  if (userStore.isAuthenticated) {
    routes = [
      ...routes,
      { to: '/favorites', name: 'Favoriter' },
      { to: '/profile', name: 'Min profil' },
    ]
  }

  const navItems = routes.map(route => (
    <NavItem key={v4()}>
      <NavLink
        exact={route.exact}
        location={location}
        activeClassName="active"
        to={route.to}
      >
        {route.name}
      </NavLink>
    </NavItem>
  ))

  return (
    <StyledNav>
      <Container>
        <NavList>
          {navItems}
        </NavList>
      </Container>
    </StyledNav>
  )
}

export default withRouter(inject('userStore')(observer(Nav)))
