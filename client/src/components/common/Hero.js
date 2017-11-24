import React from 'react'
import styled from 'styled-components'
import { media } from '../../style'

const Hero = styled.section`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;
  text-align: center;

  ${props => props.hasImage && `
    height: 40vh;
  `}

  ${media.small`
    padding-top: 96px;
    padding-bottom: 96px;
  `}

  > *:not(img) {
    max-width: 720px;
  }
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default ({ image, children, ...rest }) => (
  <Hero hasImage={!!image} {...rest}>
    {image &&
      <Image src={image} alt="" />
    }
    {children}
  </Hero>
)
