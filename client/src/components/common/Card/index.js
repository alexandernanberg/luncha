import React from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import styled from 'styled-components'
import { rgba } from 'polished'
import Icon from '../Icon'
import Image from '../Image'
import Title from '../Title'
import { colors, media } from '../../../utils/style'

const StyledCard = styled(Link)`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;
  border-radius: 3px;
  overflow: hidden;
  color: ${colors.gray900};
  text-decoration: none;
  background-color: white;
  transition: all 160ms ease-out;
  will-change: transform, box-shadow;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 3px 32px ${rgba(colors.gray900, 0.12)};
    transform: translateY(-2px);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-bottom: solid 1px ${colors.gray100};

  ::before {
    content: '';
    display: inline-block;
    padding-bottom: 64%;
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 6.2rem;
    line-height: 0;
    color: ${colors.gray400}
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`

const CardBody = styled.div`
  flex-grow: 1;
  padding: 12px 8px;
  text-align: center;

  ${media.small`
    padding: 24px;
  `}
`

const Footer = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 12px 12px;
  color: ${colors.gray700};

  svg {
    font-size: 1.4em;
    vertical-align: text-bottom;
  }

  span {
    font-size: 1rem;
    vertical-align: baseline;

    ${media.small`
      font-size: 1.2rem;
    `}
  }

  ${media.small`
    padding: 16px 24px 24px;
  `}
`

const PlaceholderCard = (props) => {
  const Wrapper = StyledCard.withComponent('div')

  return (
    <Wrapper>
      <ImageContainer>
        <Image src="" />
      </ImageContainer>
      <CardBody>
        <Title.H3>{props.title}</Title.H3>
      </CardBody>
      <Footer />
    </Wrapper>
  )
}


const Card = (props) => {
  if (props.placeholder) {
    return <PlaceholderCard />
  }

  const rating = Array.from({ length: Number(props.rating) })
    .map(() => <Icon name="star-filled" key={v4()} />)

  return (
    <StyledCard to={`/recipes/${props.slug}`}>
      <ImageContainer>
        <Image src={props.image} alt={props.title} />
      </ImageContainer>
      <CardBody>
        <Title.H3>{props.title}</Title.H3>
      </CardBody>
      <Footer>
        <h6>
          <Icon name="time" /> <span>{props.time} min</span>
        </h6>
        <h6>
          {rating}
        </h6>
      </Footer>
    </StyledCard>
  )
}

export default Card
