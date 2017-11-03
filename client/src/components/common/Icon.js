import React from 'react'
import styled from 'styled-components'
import iconMap from '../../utils/getIconMap'

const Svg = styled.svg`
  display: inline-block;
  vertical-align: text-bottom;
  width: 1em;
  height: 1em;
  fill: currentColor;
  pointer-events: none;
`

export default ({ name, ...rest }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={iconMap[name].viewBox}
    {...rest}
  >
    <path d={iconMap[name].path} />
  </Svg>
)
