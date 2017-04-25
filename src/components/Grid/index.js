import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const Grid = props =>
  <div
    {...props}
    className={classNames(style.grid, props.className)}
  />

const Column = props =>
  <div
    {...props}
    className={classNames(style.column, props.className)}
    data-size={props.size}
  />

export default Grid
export { Grid, Column }
