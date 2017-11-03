import styled from 'styled-components'
import { colors, media } from '../../constants'

const Title = styled.h1`
  line-height: 1.4em;
  color: ${colors.gray900};
`

const H1 = Title.extend`
  font-size: 2.2rem;

  ${media.small`
    font-size: 3.2rem;
  `}

  ${media.medium`
    font-size: 3.8rem;
  `}
`

const H3 = Title.extend`
  font-size: 1.5rem;
  line-height: 1.2em;

  ${media.small`
    font-size: 2rem;
  `}
`

export default {
  H1,
  H3: H3.withComponent('h3'),
}
