import React from 'react'
import Card from '../Card'
import Section from '../Section'
import style from './style.scss'

const Recipes = (props) => {
  const columns = props.store.recipes.map(r => (
    <div className={style.column} key={r.id}>
      <Card {...r} />
    </div>
  ))

  return (
    <Section>
      <div className={style.component}>
        {columns}
      </div>
    </Section>
  )
}


export default Recipes
