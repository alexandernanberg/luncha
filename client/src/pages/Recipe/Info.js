import React from 'react'
import styled from 'styled-components'
import Icon from '../../components/common/Icon'
import Section from '../../components/common/Section'
import Container from '../../components/common/Container'
import { H1 } from '../../components/common/Title'
import { colors } from '../../style'

const Details = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 8px;
  font-size: 1.3rem;
  color: ${colors.gray800};

  & > * {
    margin: 6px;
  }
`

export default ({ recipe }) => (
  <Section>
    <Container>
      <H1>{recipe.title}</H1>
      <Details>
        <li>
          <h4>
            <Icon name="time" />
            <span>
              <b>{recipe.time}</b> min
            </span>
          </h4>
        </li>
        <li>
          <h4>
            <Icon name="serving" />
            <span>
              <b>{recipe.servings}</b> pers
            </span>
          </h4>
        </li>
        <li>
          <h4>
            <Icon name="star" />
            <span>
              <b>{recipe.rating}</b> av 5
            </span>
          </h4>
        </li>
      </Details>
    </Container>
  </Section>
)
