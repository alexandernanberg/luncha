import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { fontFamily, colors } from '../../constants'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${reset}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fontFamily};
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
    color: ${colors.gray900};
  }

  body {
    min-width: 320px;
    cursor: default;
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

  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
`
