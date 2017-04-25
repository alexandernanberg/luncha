import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.scss'

const Nav = () =>
  <nav className={style.component}>
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink exact to="/" className={style.link} activeClassName={style.linkActive}>Hem</NavLink>
      </li>
      <li className={style.item}>
        <NavLink to="/recept" className={style.link} activeClassName={style.linkActive}>Recept</NavLink>
      </li>
      <li className={style.item}>
        <NavLink to="/inkopslista" className={style.link} activeClassName={style.linkActive}>Inköpslista</NavLink>
      </li>
      <li className={style.item}>
        <NavLink to="/lagg-till" className={style.link} activeClassName={style.linkActive}>Logga in</NavLink>
      </li>
    </ul>
  </nav>

export default Nav
