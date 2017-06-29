import React from 'react'
import Input from '../Input'
import style from './style.scss'

const TextField = ({ label, ...props }) => (
  <div className={style.root}>
    <label htmlFor={props.id} className={style.label}>{label}</label>
    <Input {...props} />
  </div>
)

export default TextField
