import React from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

function withAuth(Component) {
  const AuthenticatedComponent = inject('userStore')(
    observer(props => {
      if (!props.userStore.isAuthenticated) {
        return <Redirect to={`/login?redirect=${props.match.url}`} />
      }

      return <Component />
    }),
  )

  return AuthenticatedComponent
}

export default withAuth
