import React from 'react'
import { observer, inject } from 'mobx-react'
import Page from '../components/Page'
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
      <Page title="Min profil">
        <ProfileView user={user} handleLogout={this.handleLogout} />
      </Page>
    )
  }
}

export default Profile
