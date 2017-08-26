import React from 'react'
import { NavLink, withRouter } from 'react-router-dom/es'
import { observer, inject } from 'mobx-react'
import { v4 } from 'uuid'
import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '../utils/style'

const StyledNav = styled.nav`

`

const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  min-width: 100%;
`

const NavItem = styled.li`
  flex-shrink: 0;
  margin: 0 16px;

  :first-child {
    margin-left: 0;
  }
`

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 16px 0;
  border-bottom: solid 2px transparent;
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: ${colors.orange500};

  :hover {
    border-color: ${rgba(colors.orange500, 0.5)};
  }

  &.${props => props.activeClassName} {
    border-color: ${colors.orange500};
  }
`

const Nav = (props) => {
  const { userStore, location } = props
  let routes = [
    { exact: true, to: '/', name: 'Start', icon: 'home' },
    { to: '/recept', name: 'Recept', icon: 'food' },
  ]

  if (userStore.isAuthenticated) {
    routes = [
      ...routes,
      { to: '/favoriter', name: 'Favoriter', icon: 'heart' },
      { to: '/inkopslista', name: 'Inköpslista', icon: 'home' },
      { to: '/profil', name: 'Min profil', icon: 'user' },
    ]
  } else {
    routes.push({ to: '/login', name: 'Logga in / Registrera', icon: 'user' })
  }

  const navItems = routes.map(route => (
    <NavItem key={v4()}>
      <StyledNavLink
        exact={route.exact}
        location={location}
        activeClassName="active"
        to={route.to}
      >
        {route.name}
      </StyledNavLink>
    </NavItem>
  ))

  return (
    <StyledNav>
      <NavList>
        {navItems}
      </NavList>
    </StyledNav>
  )
}

export default withRouter(inject('userStore')(observer(Nav)))
