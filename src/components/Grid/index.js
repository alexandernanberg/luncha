import React from 'react'
import Card from '../Card'
import style from './style.scss'

const Recipes = (props) => {
  const columns = props.store.recipes.map(r => (
    <div className={style.column} key={r.id}>
      <Card {...r} />
    </div>
  ))

  return (
    <section className={style.component}>
      {columns}
    </section>
  )
}


export default Recipes
