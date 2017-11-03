import React from 'react'
import injectStyle from '../../utils/injectStyle'

const withGlobalStyle = Component => (props) => {
  injectStyle()
  return <Component {...props} />
}

export default withGlobalStyle
