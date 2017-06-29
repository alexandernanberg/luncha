import React from 'react'
import { NavLink, withRouter } from 'react-router-dom/es'
import { observer, inject } from 'mobx-react'
import shortid from 'shortid'
import style from './style.scss'

const Nav = (props) => {
  const { userStore, location } = props
  let routes = [
    { exact: true, to: '/', name: 'Start' },
    { to: '/recept', name: 'Recept' },
  ]

  if (userStore.isAuthenticated) {
    routes = [
      ...routes,
      { to: '/favoriter', name: 'Favoriter' },
      { to: '/inkopslista', name: 'Inköpslista' },
      { to: '/profil', name: 'Min profil' },
    ]
  } else {
    routes.push({ to: '/login', name: 'Logga in' })
  }

  const navItems = routes.map(route => (
    <li key={shortid()} className={style.item}>
      <NavLink
        exact={route.exact}
        location={location}
        to={route.to}
        className={style.link}
        activeClassName={style.linkActive}
      >
        {route.name}
      </NavLink>
    </li>
  ))

  return (
    <nav className={style.component}>
      <ul className={style.list}>
        {navItems}
      </ul>
    </nav>
  )
}

export default withRouter(inject('userStore')(observer(Nav)))
