import React from 'react'
import styled from 'styled-components'

const View = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 64px 24px;
`

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  max-width: 280px;
  font-size: 1.3rem;

  > *:last-child {
    margin-top: 24px;
  }
`

const Form = props => (
  <View>
    <StyledForm {...props} />
  </View>
)

export default Form
