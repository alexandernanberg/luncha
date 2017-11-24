import React from 'react'
import styled from 'styled-components'
import Section from './common/Section'
import BaseContainer from '../components/common/Container'
import Button from '../components/common/Button'
import Title from '../components/common/Title'
import Text from '../components/common/Text'
import { colors } from '../style'

const Container = BaseContainer.extend`
  grid-gap: 32px 12px;
  text-align: center;
`

const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`

const Details = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
`

const Email = styled(Text)`
  font-size: 1.3rem;
  color: ${colors.gray600}
`

const ProfileView = ({ user, handleLogout }) => (
  <Section>
    <Container>
      <Avatar src={`${user.gravatar}?s=88`} alt={user.name} />
      <Details>
        <Title.H3>{user.name}</Title.H3>
        <Email>{user.email}</Email>
      </Details>
      <Button onClick={handleLogout}>Logga ut</Button>
    </Container>
  </Section>
)

export default ProfileView
