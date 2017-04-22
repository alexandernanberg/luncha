import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import Nav from '../Nav'
import style from './style.scss'

const Header = () =>
  <header className={style.component}>
    <Link to="/" className={style.logo}>
      <Icon name="logo" /> <span>Luncha</span>
    </Link>
    <Nav />
  </header>

export default Header
