import { NavLink as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '../../constants'

const Link = styled(RouterLink)`
  appearance: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.6em;
  color: ${colors.orange500};
  text-decoration: none;
  border-bottom: dotted 1px ${rgba(colors.orange500, 0.5)};
  transition: all 120ms ease-out;

  :hover  {
    background-color: ${rgba(colors.orange500, 0.08)};
  }

  :active {
    background-color: ${rgba(colors.orange500, 0.16)};
    border-style: solid;
  }
`

const ExternalLink = Link.withComponent('a')

export default Link
export { ExternalLink }
