import React from 'react'
import styled from 'styled-components'
import { colors, fontFamily } from '../../constants'
import Loader, { StyledLoader } from './Loader'

const Button = styled.button`
  display: inline-block;
  vertical-align: top;
  appearance: none;
  outline: none;
  border: 0;
  border-radius: 2px;
  padding: 15px 24px;
  font-family: ${fontFamily};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1em;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  background: linear-gradient(to right, ${colors.orange500}, ${colors.red400});
  cursor: pointer;
  transition: all 120ms ease-out;
  will-change: transform, box-shadow;

  :hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  ${StyledLoader} {
    margin-top: 0;
  }
`

const LinkedButton = Button.withComponent('a')

export default ({ loading, children, ...props }) => (
  <Button {...props}>
    { loading ?
      <Loader white /> :
      children
    }
  </Button>
)

export { LinkedButton }
