import React from 'react'
import LazyImage from './LazyImage'
import Icon from '../Icon'
import style from './style.scss'

const FallbackComponent = (
  <div>
    <Icon name="image" className={style.error} />
  </div>
)

const LoadingComponent = (
  <div className={style.loader}>
    <span />
    <span />
    <span />
  </div>
)

const Image = props =>
  <LazyImage
    src={props.src}
    alt={props.alt}
    preloader={LoadingComponent}
    fallback={FallbackComponent}
  />

export default Image
export { LazyImage }
