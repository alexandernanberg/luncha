import { css, injectGlobal } from 'styled-components'

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

export const breakpoints = {
  large: 1170,
  medium: 960,
  small: 520,
}

export const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${breakpoints[key]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export const injectGlobalStyle = () => injectGlobal`
  ${preval`
    const fs = require('fs')
    module.exports = fs.readFileSync('node_modules/reset-css/reset.css', 'utf8')
  `}

  :root {
    // Font
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    // Colors
    --gray900: #212121;
    --gray800: #424242;
    --gray700: #616161;
    --gray600: #757575;
    --gray500: #808080;
    --gray400: #bdbdbd;
    --gray300: #e0e0e0;
    --gray200: #f5f5f5;
    --gray100: #fcf8f6;
    --red500: #fb371b;
    --red400: #f67866;
    --blue500: #2196f3;
    --orange500: #f07d43;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
  }

  ::selection {
    color: white;
    background-color: ${colors.orange500};
  }
`
