import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const Grid = props =>
  <div
    {...props}
    className={classNames(style.grid, props.className)}
  />

const Column = ({ small, medium, large, ...props }) =>
  <div
    {...props}
    className={classNames(
      style.column,
      props.className,
      { [style[`small--${small}`]]: small },
      { [style[`medium--${medium}`]]: medium },
      { [style[`large--${large}`]]: large },
    )}
  />

export default Grid
export { Grid, Column }
