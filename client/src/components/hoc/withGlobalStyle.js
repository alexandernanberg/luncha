import React from 'react'
import { injectGlobalStyle } from '../../style'

const withGlobalStyle = Component => (props) => {
  injectGlobalStyle()
  return <Component {...props} />
}

export default withGlobalStyle
