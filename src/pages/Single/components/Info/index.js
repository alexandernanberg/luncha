import React from 'react'
import Icon from '../../../../components/Icon'
import style from './style.scss'

const Info = props =>
  <ul className={style.component}>
    <li className={style.item}>
      <h4>
        <Icon name="time" />
        <span><b>{props.recipe.time}</b> min</span>
      </h4>
    </li>
    <li className={style.item}>
      <h4>
        <Icon name="serving" />
        <span><b>{props.recipe.servings}</b> pers</span>
      </h4>
    </li>
    <li className={style.item}>
      <h4>
        <Icon name="star" />
        <span><b>{props.recipe.rating}</b> av 5</span>
      </h4>
    </li>
  </ul>

export default Info
