import React from 'react'
import LazyImage from './LazyImage'
import Icon from '../Icon'
import Loader from '../Loader'

const FallbackComponent = (
  <div>
    <Icon name="image" />
  </div>
)

const Image = props => (
  <LazyImage
    {...props}
    loader={Loader}
    fallback={FallbackComponent}
  />
)

export default Image
export { LazyImage }
