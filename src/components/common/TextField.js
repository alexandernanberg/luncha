import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '../../utils/style'

const Input = styled.input`
  display: block;
  padding: 8px 12px;
  width: 100%;
  border: solid 2px ${colors.gray300};
  border-radius: 3px;
  margin-bottom: 24px;
  font-size: 1.6rem;
  color: ${colors.gray900};
  transition: border-color 120ms ease-out;

  :focus {
    outline: none;
    border-color: ${rgba(colors.red500, 0.5)};
  }
`

const Label = styled.label`
  width: 100%;
  display: block;
  margin-bottom: 6px;
  font-size: 1.3rem;
  line-height: 1em;
  font-weight: 600;
  color: ${colors.gray900};
`

const StyledTextField = styled.div`
  width: 100%;
`

const TextField = ({ label, ...props }) => (
  <StyledTextField>
    <Label htmlFor={props.id}>{label}</Label>
    <Input {...props} />
  </StyledTextField>
)

export default TextField
export { Input, Label }
