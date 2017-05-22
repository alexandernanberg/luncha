import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const Button = ({ children, href, ...props }) => {
  const className = classNames(style.component, props.className)

  if (href) {
    return (
      <a {...props} href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}

export default Button
