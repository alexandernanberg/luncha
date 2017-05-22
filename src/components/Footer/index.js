import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '../Grid'
import Icon from '../Icon'
import style from './style.scss'

const Footer = () => (
  <footer className={style.component}>
    <Grid className={style.grid}>
      <Link to="/" className={style.logo}>
        <Icon name="logo" /> <span>Luncha</span>
      </Link>
      <p className={style.copyright}>&copy; {new Date().getFullYear()} luncha.co</p>
    </Grid>
  </footer>
)

export default Footer
