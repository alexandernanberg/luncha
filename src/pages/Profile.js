import React from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import Button from '../components/common/Button'

const View = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 32px;
  text-align: center;
`

@inject('userStore')
@observer
class Profile extends React.Component {
  handleLogout = () => {
    this.props.userStore.logout()
  }

  render() {
    return (
      <View>
        <h1>Min profil</h1>
        <p>Id: {this.props.userStore.user.id}</p>
        <p>Epost: {this.props.userStore.user.email}</p>
        <p>Namn: {this.props.userStore.user.name}</p>
        <Button onClick={this.handleLogout}>Logga ut</Button>
      </View>
    )
  }
}

export default Profile
