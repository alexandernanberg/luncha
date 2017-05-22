import React from 'react'
import style from './style.scss'

const Section = props => (
  <section className={style.component}>
    {props.children}
  </section>
)

export default Section
