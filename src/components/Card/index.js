import React from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import Icon from '../Icon'
import style from './style.scss'

const Card = props =>
  <Link to={`/recept/${props.slug}`} className={style.component}>
    <figure className={style.figure}>
      <img src={props.image} alt="" />
    </figure>
    <div className={style.body}>
      <h3>{props.name}</h3>
    </div>
    <footer className={style.footer}>
      <h6>
        <Icon name="time" /> <span>{props.time} min</span>
      </h6>
      <h6>
        {[...Array(Number(props.rating)).keys()].map(() => <Icon name="star" key={v4()} />)}
      </h6>
    </footer>
  </Link>

export default Card
