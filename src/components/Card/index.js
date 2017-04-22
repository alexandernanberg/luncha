import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'

const Card = props =>
  <Link to={`/recept/${props.slug}`} className={style.component}>
    <figure className={style.image}>
      <img src={props.image} alt="" />
    </figure>
    <h3>{props.name}</h3>
  </Link>

export default Card
