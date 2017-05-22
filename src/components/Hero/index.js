import React from 'react'
import style from './style.scss'

const Hero = props => (
  <section className={style.component}>
    {props.children}
  </section>
)

export default Hero
