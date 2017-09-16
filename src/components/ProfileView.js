import React from 'react'
import styled from 'styled-components'
import Section from './common/Section'
import BaseContainer from '../components/common/Container'
import Button from '../components/common/Button'
import Title from '../components/common/Title'
import Text from '../components/common/Text'
import { colors } from '../constants'

const Container = BaseContainer.extend`
  display: grid;
  grid-gap: 32px 12px;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-items: center;
  justify-content: center;
`

const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`

const Details = styled.div`
  justify-self: center;
  align-self: center;
`

const Email = styled(Text)`
  font-size: 1.3rem;
  color: ${colors.gray600}
`

const ProfileView = ({ user, handleLogout }) => (
  <Section>
    <Container>
      <Avatar src={`${user.gravatar}?s=200`} alt={user.name} />
      <Details>
        <Title.H1>{user.name}</Title.H1>
        <Email>{user.email}</Email>
      </Details>
      <Button onClick={handleLogout}>Logga ut</Button>
    </Container>
  </Section>
)

export default ProfileView
