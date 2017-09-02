import styled from 'styled-components'
import { media } from '../../constants'

const Hero = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;
  text-align: center;

  ${media.small`
    padding-top: 96px;
    padding-bottom: 96px;
  `}

  > * {
    max-width: 720px;
  }
`

export default Hero
