import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const symbols = new Map()
const files = require.context('./glyphs', false, /.svg$/)
files.keys().forEach((item) => {
  const { id } = files(item).default
  symbols.set(id.replace(/_{2}(.*)/, ''), id)
})

const StyledSvg = styled.svg`
  display: inline-block;
  vertical-align: text-top;
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  pointer-events: none;
`

const Icon = ({ name, ...props }) => (
  <StyledSvg {...props}>
    <use xlinkHref={`#${symbols.get(name)}`} />
  </StyledSvg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
