import React from 'react'
import Icon from './common/Icon'

const Info = props => (
  <ul>
    <li>
      <h4>
        <Icon name="time" />
        <span><b>{props.recipe.time}</b> min</span>
      </h4>
    </li>
    <li>
      <h4>
        <Icon name="serving" />
        <span><b>{props.recipe.servings}</b> pers</span>
      </h4>
    </li>
    <li>
      <h4>
        <Icon name="star" />
        <span><b>{props.recipe.rating}</b> av 5</span>
      </h4>
    </li>
  </ul>
)

export default Info
