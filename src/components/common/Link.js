import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '../../utils/style'

const Link = styled.a`
  appearance: none;
  outline: none;
  padding-bottom: 3px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${colors.red500};
  text-decoration: none;
  border-bottom: dotted 1px ${rgba(colors.red500, 0.5)};
  transition: all 120ms ease-out;

  :hover  {
    background-color: ${rgba(colors.red500, 0.05)};
  }

  :active {
    background-color: ${rgba(colors.red500, 0.1)};
    border-style: solid;
  }
`

export default Link
