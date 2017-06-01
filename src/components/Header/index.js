import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import Nav from '../Nav'
import style from './style.scss'

const Header = () => (
  <header className={style.component}>
    <div className={style.top}>
      <Link to="/" className={style.logo}>
        <Icon name="logo" /> <span>Luncha</span>
      </Link>
    </div>
    <Nav />
  </header>
)

export default Header
