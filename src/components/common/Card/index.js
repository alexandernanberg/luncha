import React from 'react'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import Icon from '../Icon'
import Image from '../Image'
import style from './style.scss'

const PlaceholderCard = () => (
  <div className={style.component}>
    <figure className={style.figure}>
      <Image src="" />
    </figure>
    <div className={style.body}>
      <h3>
        <span className={style.placeholder} />
        <span className={style.placeholder} />
      </h3>
    </div>
    <footer className={style.footer}>
      <h6>
        <span className={style.placeholder} />
      </h6>
      <h6>
        <span className={style.placeholder} />
      </h6>
    </footer>
  </div>
)

const Card = (props) => {
  if (props.placeholder) {
    return <PlaceholderCard />
  }

  return (
    <Link to={`/recept/${props.slug}`} className={style.component}>
      <figure className={style.figure}>
        <Image src={props.image} alt={props.title} />
      </figure>
      <div className={style.body}>
        <h3>{props.title}</h3>
      </div>
      <footer className={style.footer}>
        <h6>
          <Icon name="time" /> <span>{props.time} min</span>
        </h6>
        <h6>
          {[...Array(Number(props.rating)).keys()].map(() => <Icon name="star" key={shortid()} />)}
        </h6>
      </footer>
    </Link>
  )
}

export default Card
export { PlaceholderCard }
