import styled from 'styled-components'
import { colors, media } from '../../constants'

const Section = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: ${colors.gray100};

  ${media.small`
    padding-top: 64px;
    padding-bottom: 64px;
  `}
`

export default Section
