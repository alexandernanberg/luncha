import React from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import styled from 'styled-components'
import { rgba } from 'polished'
import Icon from './Icon'
import Image from './Image'
import { colors } from '../../utils/style'

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

  :hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 32px ${rgba(colors.gray900, 0.12)};
  }
`

const CardFigure = styled.figure`
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
  padding: 24px;
  text-align: center;
`

const CardFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 16px 24px 24px;

  svg {
    font-size: 1.4em;
  }

  span {
    vertical-align: middle;
  }
`

const Card = (props) => {
  if (props.placeholder) {
    return null
  }

  const rating = [...Array(Number(props.rating)).keys()]
    .map(() => <Icon name="star" key={v4()} />)

  return (
    <StyledCard to={`/recept/${props.slug}`}>
      <CardFigure>
        <Image src={props.image} alt={props.title} />
      </CardFigure>
      <CardBody>
        <h3>{props.title}</h3>
      </CardBody>
      <CardFooter>
        <h6>
          <Icon name="time" /> <span>{props.time} min</span>
        </h6>
        <h6>
          {rating}
        </h6>
      </CardFooter>
    </StyledCard>
  )
}

export default Card
