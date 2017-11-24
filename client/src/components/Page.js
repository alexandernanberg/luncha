import React from 'react'
import Helmet from 'react-helmet'

const Fragment = ({ children }) => children

export default ({ children, ...props }) => (
  <Fragment>
    <Helmet {...props} />
    {children}
  </Fragment>
)
