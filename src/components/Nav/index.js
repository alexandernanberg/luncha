import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.scss'

const Nav = () =>
  <nav className={style.component}>
    <NavLink exact to="/" className={style.link} activeClassName={style.linkActive}>Hem</NavLink>
    <NavLink to="/inkopslista" className={style.link} activeClassName={style.linkActive}>Inköpslista</NavLink>
    <NavLink to="/lagg-till" className={style.link} activeClassName={style.linkActive}>Lägg till</NavLink>
    <NavLink to="/sok" className={style.link} activeClassName={style.linkActive}>Sök</NavLink>
  </nav>

export default Nav
