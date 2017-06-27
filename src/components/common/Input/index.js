import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const Input = ({ className, type, ...props }) => (
  <input
    {...props}
    type={type}
    className={classNames(
      style.component,
      props.className,
    )}
  />
)

export default Input
