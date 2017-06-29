import React from 'react'
import { Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import style from './style.scss'

@inject('userStore')
@observer
class Profile extends React.Component {
  componentDidMount() {
    this.props.userStore.fetchUser()
  }

  render() {
    if (!this.props.userStore.isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <div className={style.component}>
        <h1>Min profil</h1>
        <p>Id: {this.props.userStore.user.id}</p>
        <p>Epost: {this.props.userStore.user.email}</p>
        <p>Namn: {this.props.userStore.user.name}</p>
      </div>
    )
  }
}

export default Profile
