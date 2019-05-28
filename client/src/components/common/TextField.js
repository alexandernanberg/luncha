import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '../../style'

const Input = styled.input`
  display: block;
  padding: 8px 12px;
  width: 100%;
  border: solid 2px ${colors.gray300};
  border-radius: 3px;
  font-size: 1.6rem;
  color: ${colors.gray900};
  appearance: none;
  box-shadow: none;
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
  font-weight: 700;
  color: ${colors.gray900};
`

const StyledTextField = styled.div`
  position: relative;
  margin-bottom: 32px;
  width: 100%;

  ${props =>
    props.error &&
    `
    & input {
      border-color: ${colors.red500};
    }
  `}
`

const ErrorMessage = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${colors.red500};
`

const TextField = ({ label, errorMessage, error = false, ...props }) => (
  <StyledTextField error={error}>
    <Label htmlFor={props.id}>{label}</Label>
    <Input {...props} />
    {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </StyledTextField>
)

export default TextField
export { Input, Label }
