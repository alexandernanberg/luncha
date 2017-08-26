import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { fontFamily } from '../../utils/style'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600');

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
    color: map-get($colors, white);
    background-color: map-get($colors, orange);
  }

  a {
    -webkit-tap-highlight-color: rgba(white, 0);
  }
`
