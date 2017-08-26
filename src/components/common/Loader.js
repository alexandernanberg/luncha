import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from '../../utils/style'

const animation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
  }
`

const StyledLoader = styled.div`
  margin-top: 4px;

  span {
    display: inline-block;
    margin: 0 3px;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background-color: ${colors.gray300};

    :nth-child(1) {
      animation: ${animation} 1.4s infinite ease;
    }

    :nth-child(2) {
      animation: ${animation} 1.4s infinite ease 160ms;
    }

    :nth-child(3) {
      animation: ${animation} 1.4s infinite ease 320ms;
    }
  }
`

const Loader = () => (
  <StyledLoader>
    <span />
    <span />
    <span />
  </StyledLoader>
)

export default Loader
