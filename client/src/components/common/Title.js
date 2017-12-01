import styled from 'styled-components'
import { colors, media } from '../../style'

const Title = styled.h1`
  line-height: 1.4em;
  color: ${colors.gray900};
`

export const H1 = Title.extend`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.16em;
  margin-bottom: 0.8em;

  ${media.small`
    font-size: 3.2rem;
  `}

  ${media.medium`
    font-size: 4.4rem;
  `}
`

export const H3 = styled(Title.withComponent('h3'))`
  font-size: 1.5rem;
  line-height: 1.2em;

  ${media.small`
    font-size: 2rem;
  `}
`
