import React from 'react'
import { observer, inject } from 'mobx-react'
import ProfileView from '../components/ProfileView'

@inject('userStore')
@observer
class Profile extends React.Component {
  handleLogout = () => {
    this.props.userStore.logout()
  }

  render() {
    const { user } = this.props.userStore

    return (
      <div>
        <ProfileView user={user} />
      </div>
    )
  }
}

export default Profile
