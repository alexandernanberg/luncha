import React from 'react'
import Page from '../components/Page'
import ProfileView from '../components/ProfileView'

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
