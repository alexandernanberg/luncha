import React from 'react'
import { observer, inject } from 'mobx-react'
import Button from '../components/common/Button'
import Title from '../components/common/Title'
import Section from '../components/common/Section'
import Container from '../components/common/Container'
import Text from '../components/common/Text'

@inject('userStore')
@observer
class Profile extends React.Component {
  handleLogout = () => {
    this.props.userStore.logout()
  }

  render() {
    const { user } = this.props.userStore

    return (
      <Section>
        <Container>
          <img src={user.gravatar} alt={user.name} />
          <Title.H1>{user.name}</Title.H1>
          <Text>Id: {user.id}</Text>
          <Text>Epost: {user.email}</Text>
          <Button onClick={this.handleLogout}>Logga ut</Button>
        </Container>
      </Section>
    )
  }
}

export default Profile
