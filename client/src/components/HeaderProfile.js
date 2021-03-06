import React from 'react'
import { inject, observer } from 'mobx-react'
import { NavLink as RouterLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { rgba } from 'polished'

const Link = styled(RouterLink)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.6em;
  text-decoration: none;
  color: ${rgba('white', 0.8)};

  &:hover,
  &:focus {
    color: white;
  }

  &.${props => props.activeClassName} {
    color: white;
  }
`

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: rgba(255, 255, 255, 0.5);
`

export default withRouter(
  inject('userStore')(
    observer(({ userStore }) =>
      !userStore.isAuthenticated ? (
        <Link to="/login" activeClassName="active">
          Logga in
        </Link>
      ) : (
        <Link to="/profile">
          <Avatar
            src={`${userStore.user.gravatar}?s=24`}
            alt={userStore.user.name}
          />
          <span>{userStore.user.name}</span>
        </Link>
      ),
    ),
  ),
)
