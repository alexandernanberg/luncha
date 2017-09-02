import { css } from 'styled-components'

export const API = 'https://api.luncha.co/v1'

export const breakpoints = {
  large: '960px',
  medium: '640px',
  small: '420px',
}

export const colors = {
  gray900: '#212121',
  gray800: '#424242',
  gray700: '#616161',
  gray600: '#757575',
  gray500: '#808080',
  gray400: '#bdbdbd',
  gray300: '#e0e0e0',
  gray200: '#f5f5f5',
  gray100: '#fcf8f6',
  red500: '#fb371b',
  red400: '#f67866',
  blue500: '#2196f3',
  orange500: '#f07d43',
}

export const fontFamily = 'Nunito Sans, sans-serif'

const sizes = {
  large: 1170,
  medium: 960,
  small: 520,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
