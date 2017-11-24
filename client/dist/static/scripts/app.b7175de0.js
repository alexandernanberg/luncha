webpackJsonp([1], {
  108(e, t, n) { e.exports = n(109) },
  109(e, t, n) {
    function a(e, t, n, a) {
      n && ct()(e, t, {
        enumerable: n.enumerable, configurable: n.configurable, writable: n.writable, value: n.initializer ? n.initializer.call(a) : void 0,
      })
    } function r(e, t, n, a, r) { let i = {}; return Object.keys(a).forEach((e) => { i[e] = a[e] }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ('value' in i || i.initializer) && (i.writable = !0), i = n.slice().reverse().reduce((n, a) => a(e, t, n) || n, i), r && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(r) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i } function i(e, t, n, a, r) { let i = {}; return Object.keys(a).forEach((e) => { i[e] = a[e] }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ('value' in i || i.initializer) && (i.writable = !0), i = n.slice().reverse().reduce((n, a) => a(e, t, n) || n, i), r && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(r) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i }Object.defineProperty(t, '__esModule', { value: !0 }); var o,
      l,
      c,
      s,
      p,
      u,
      m,
      d,
      h,
      g,
      f,
      b,
      y,
      v,
      x,
      w = n(0),
      E = n.n(w),
      z = n(71),
      C = n.n(z),
      O = n(120),
      k = n(11),
      j = n(12),
      L = n(1),
      S = n(13),
      N = n.n(S),
      _ = n(25),
      A = n.n(_),
      H = n(42),
      M = n.n(H),
      D = (n(5), {
        food: { path: 'M29.437 20.305h-.858l-4.867 7.244c-.388.517-1.224.935-1.87.935H10.158c-.645 0-1.482-.418-1.87-.935L3.42 20.305h-.857a.585.585 0 0 1 0-1.168H6.77a5.844 5.844 0 0 1 5.724-4.675c.374 0 .746.038 1.113.11a6.987 6.987 0 0 1 5.314-2.446 7.011 7.011 0 0 1 7.01 7.01h3.507a.585.585 0 0 1 0 1.17zm-10.516-7.01a5.834 5.834 0 0 0-4.865 2.608 4.656 4.656 0 0 0-1.561-.272 4.671 4.671 0 0 0-4.52 3.505h16.788a5.842 5.842 0 0 0-5.842-5.842zm-14.02 7.01l4.673 7.011h12.853l4.674-7.01H4.9zm7.594-9.348c-.292-.292-.584-.583-.584-1.168 0-1.168 1.168-1.168 1.168-2.337 0-.584-.292-.877-.584-1.168-1.098-1.1 0-1.753 1.168 0 .293.291.585.584.585 1.168 0 1.169-1.169 1.169-1.169 2.337 0 .579.287.87.576 1.16 1.761 1.761.008 1.177-1.16.008zM8.99 12.126c-.292-.292-.585-.584-.585-1.169 0-1.168 1.169-1.168 1.169-2.336 0-1.169-1.168-1.169-1.168-2.337 0-.412.145-.824.333-1.184.835-1.154 2.005-1.737 1.184-.03-.196.367-.349.79-.349 1.214 0 1.168 1.169 1.168 1.169 2.337 0 1.168-1.17 1.168-1.17 2.336 0 .59.299.883.594 1.179 1.16 1.158.575 1.743-1.178-.01z', viewBox: '0 0 32 32' }, heart: { path: 'M25.837 18.181h.007l-.06.06c-.063.064-.128.126-.195.19l-8.713 8.503a1.299 1.299 0 0 1-1.751 0l-8.709-8.5c-.068-.066-.137-.13-.203-.197l-.056-.057h.006A7.765 7.765 0 0 1 4 12.8 7.8 7.8 0 0 1 11.8 5 7.76 7.76 0 0 1 16 6.234 7.755 7.755 0 0 1 20.2 5a7.8 7.8 0 0 1 7.8 7.8 7.767 7.767 0 0 1-2.163 5.381zM20.2 6.2A6.57 6.57 0 0 0 16 7.709a6.6 6.6 0 0 0-8.385 10.194L16 25.955l8.386-8.053A6.6 6.6 0 0 0 20.2 6.2z', viewBox: '0 0 32 32' }, home: { path: 'M29.294 17.718l-.666.014-1.993-2.201v10.251a2.66 2.66 0 0 1-2.66 2.66H8.024a2.66 2.66 0 0 1-2.66-2.66v-10.17L3.37 17.8l-.664.005c-.734 0-.926-.436-.43-.975l3.76-4.073c.06-.07.118-.14.187-.203l8.069-8.747c.995-1.079 2.608-1.076 3.6.007L29.724 16.73c.496.542.302.984-.431.988zM6.693 25.783c0 .734.595 1.33 1.33 1.33h15.953a1.33 1.33 0 0 0 1.33-1.33V14.064l-2.03-2.24H8.812l-2.12 2.327v11.632zM16.949 4.841c-.489-.55-1.281-.551-1.77-.004l-6.366 6.986h14.463L16.95 4.841zm-2.944 12.3h3.988c.735 0 1.33.596 1.33 1.33v8.641h-1.33V18.47h-3.988v8.641h-1.33V18.47c0-.734.596-1.33 1.33-1.33z', viewBox: '0 0 32 32' }, image: { path: 'M2 2v28h28V2H2zm26.133 26.133H3.867V24.4h24.266v3.733zm-24.266-5.6V3.867h24.266v18.666H3.867zm22.779-3.425l-1.301 1.338-4.512-4.384-2.901 3.128-4.64-8.241-6.35 9.286-1.54-1.052 8.044-11.766 4.861 8.628 2.459-2.655 5.88 5.718z', viewBox: '0 0 32 32' }, logo: { path: 'M13.807 27.771c-6.032-1.133-10.609-6.43-10.609-12.773C3.198 7.83 9.04 2 16.222 2c7.182 0 13.024 5.83 13.024 12.997 0 6.113-4.25 11.253-9.955 12.634l.705 1.543a.582.582 0 0 1-.532.826.584.584 0 0 1-.532-.341l-.822-1.8a13.104 13.104 0 0 1-3.095.08l-.573 1.256a.584.584 0 0 1-1.065-.484l.43-.94zm.5-1.097l1.63-3.569-2.617-5.728a3.476 3.476 0 0 1-2.096-.097 3.402 3.402 0 0 1-1.944-1.808l-2.385-5.22a.583.583 0 0 1 .289-.774.585.585 0 0 1 .775.289l2.392 5.237.001.002c.25.548.71.973 1.276 1.179a2.303 2.303 0 0 0 1.759-.068c1.144-.521 1.661-1.856 1.162-2.988l-.013-.027-2.392-5.237a.583.583 0 0 1 .29-.773.585.585 0 0 1 .774.289l2.38 5.209.013.027c.705 1.544.156 3.347-1.217 4.275L16.58 21.7l2.408-5.272a3.458 3.458 0 0 1-1.3-1.643 3.389 3.389 0 0 1 .095-2.655l1.287-2.82a.594.594 0 0 1 .076-.121c.883-1.496 2.789-2.113 4.419-1.373 1.626.74 2.41 2.577 1.864 4.221a.582.582 0 0 1-.045.145l-.082.18a3.483 3.483 0 0 1-.011.025l-1.198 2.622-.007.015a3.448 3.448 0 0 1-3.142 2.003c-.302 0-.602-.04-.892-.116l-2.829 6.194 1.573 3.442c5.304-1.176 9.281-5.908 9.281-11.55 0-6.523-5.317-11.83-11.855-11.83-6.537 0-11.855 5.307-11.855 11.83 0 5.874 4.31 10.76 9.94 11.677zm1.225.134a12.01 12.01 0 0 0 2.07-.06l-1.022-2.236-1.048 2.296zm-3.087-12.171a.584.584 0 0 1-.532-.341L9.52 9.058a.583.583 0 0 1 .29-.773.585.585 0 0 1 .774.29l2.393 5.236a.582.582 0 0 1-.532.825zm11.778-2.726l.007-.015c.52-1.139.003-2.492-1.15-3.018-1.154-.526-2.517-.024-3.036 1.113l-1.207 2.644-.008.015a2.236 2.236 0 0 0-.048 1.721 2.3 2.3 0 0 0 1.138 1.25.59.59 0 0 1 .131.059c1.136.476 2.452-.02 2.966-1.127a.585.585 0 0 1 .006-.014l1.201-2.628z', viewBox: '0 0 32 32' }, serving: { path: 'M17.156 5.263a.583.583 0 0 1-.583-.583c0-.834-.679-1.513-1.513-1.513-.833 0-1.512.679-1.512 1.513a.583.583 0 1 1-1.167 0A2.682 2.682 0 0 1 15.061 2a2.682 2.682 0 0 1 2.679 2.68.583.583 0 0 1-.584.583zM4.595 13.988c.308-5.506 4.886-9.892 10.465-9.892 5.58 0 10.158 4.386 10.465 9.892h1.014c.322 0 .583.26.583.583v2.004a.583.583 0 0 1-.583.583h-1.321v.53a.583.583 0 0 1-.583.583h-.947v.101a.583.583 0 0 1-.583.583H7.017a.583.583 0 0 1-.583-.583v-.102h-.947a.583.583 0 0 1-.584-.583v-.53h-1.32A.583.583 0 0 1 3 16.574v-2.003c0-.322.261-.583.583-.583h1.012zm1.169 0h18.593c-.306-4.862-4.36-8.725-9.297-8.725-4.936 0-8.99 3.863-9.296 8.725zm17.915 13.72a.588.588 0 0 1-.217-.173l-.535-.701h-7.87a.588.588 0 0 1-.317-.094l-6.37-4.116a.503.503 0 0 1-.064-.048c-.47-.404-.775-1.132-.332-1.776a1.367 1.367 0 0 1 1.156-.608c.446 0 .806.185.875.223 1.488.701 4.194 1.866 4.981 1.934.45.038 1.369.087 2.257.079a36.247 36.247 0 0 0-1.589-.412.795.795 0 0 1-.063-.019c-.712-.255-.88-.825-.81-1.236.1-.574.646-1.041 1.218-1.041.818 0 1.924 0 4.16.017.903.007 3.216.538 4.513 1.156a.583.583 0 0 1 .623-.332l3.692.595a.582.582 0 0 1 .491.575v7.686a.583.583 0 0 1-.583.583.613.613 0 0 1-.134-.015l-4.712-1.11a.585.585 0 0 1-.444-.65l.074-.516zm-8.45-2.041h7.986c.182 0 .353.085.464.23l.114.15.572-4.008c-.788-.353-2.678-1.123-4.217-1.135-2.23-.017-3.334-.017-4.15-.017a.056.056 0 0 0-.013.01c3.638.857 3.873 1.302 3.985 1.517.11.208.102.45-.018.648-.19.313-.497.534-2.747.534-.93 0-1.835-.042-2.318-.084-1.255-.108-4.99-1.858-5.413-2.057a.828.828 0 0 0-.343-.095c-.094 0-.143.025-.195.102-.008.046.048.144.113.213l6.18 3.992zm9.606 2.194l3.476.819v-6.452l-2.615-.422-.86 6.055zM7.6 17.788h14.922v-.101c0-.322.261-.583.583-.583h.947v-.53c0-.322.261-.583.583-.583h1.32v-.837H4.168v.837h1.32c.322 0 .583.261.583.584v.53h.947c.322 0 .583.26.583.583v.1z', viewBox: '0 0 32 32' }, 'star-filled': { path: 'M30 13.173H19.303L16 3l-3.305 10.173H2l8.652 6.286L7.35 29.632 16 23.344l8.652 6.288L21.35 19.46z', viewBox: '0 0 32 32' }, star: { path: 'M30 13.173H19.303L16 3l-3.305 10.173H2l8.652 6.286L7.35 29.632 16 23.344l8.652 6.288L21.35 19.46 30 13.173zm-8.616 11.96L16 21.22l-5.384 3.913 2.057-6.333-5.384-3.908h6.656L16 8.561l2.055 6.33h6.656l-5.384 3.91 2.057 6.332z', viewBox: '0 0 32 32' }, time: { path: 'M17.176 5.335V3.647h2.471V2H13.06v1.647h2.47v1.688C9.103 5.764 4 11.113 4 17.647 4 24.46 9.54 30 16.353 30c6.812 0 12.353-5.54 12.353-12.353 0-6.534-5.103-11.883-11.53-12.312zm-.823 23.018c-5.903 0-10.706-4.803-10.706-10.706S10.45 6.941 16.353 6.941s10.706 4.803 10.706 10.706-4.803 10.706-10.706 10.706zm.823-11.53h6.589v1.648h-8.236v-6.589h1.647v4.942z', viewBox: '0 0 32 32' }, user: { path: 'M28.528 28.716c-1.3-5.724-6.41-10-12.529-10-6.116 0-11.227 4.276-12.527 10H2c1.324-6.521 7.088-11.43 14-11.43s12.676 4.909 14 11.43h-1.472zM16 17.286A7.143 7.143 0 1 1 16 3a7.143 7.143 0 0 1 0 14.287zM16 4.43a5.715 5.715 0 1 0 0 11.429 5.715 5.715 0 0 0 0-11.431z', viewBox: '0 0 32 32' },
      }),
      I = L.b.svg.withConfig({ displayName: 'Icon__Svg' })(['display:inline-block;vertical-align:text-top;width:1em;height:1em;fill:currentColor;pointer-events:none;']),
      q = function (e) {
        let t = e.name,
          n = M()(e, ['name']); return E.a.createElement(I, A()({ xmlns: 'http://www.w3.org/2000/svg', viewBox: D[t].viewBox }, n), E.a.createElement('path', { d: D[t].path }))
      },
      B = n(43),
      F = n.n(B),
      P = N()(['\n  ', '\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n\n  body {\n    font-family: ', ';\n    -webkit-font-smoothing: antialiased;\n  }\n\n  img {\n    display: inline-block;\n    vertical-align: middle;\n    height: auto;\n    max-width: 100%;\n  }\n\n  ::selection {\n    color: white;\n    background-color: ', ';\n  }\n'], ['\n  ', '\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n\n  body {\n    font-family: ', ';\n    -webkit-font-smoothing: antialiased;\n  }\n\n  img {\n    display: inline-block;\n    vertical-align: middle;\n    height: auto;\n    max-width: 100%;\n  }\n\n  ::selection {\n    color: white;\n    background-color: ', ';\n  }\n']),
      R = {
        gray900: '#212121', gray800: '#424242', gray700: '#616161', gray600: '#757575', gray500: '#808080', gray400: '#bdbdbd', gray300: '#e0e0e0', gray200: '#f5f5f5', gray100: '#fcf8f6', red500: '#fb371b', red400: '#f67866', blue500: '#2196f3', orange500: '#f07d43',
      },
      V = '-apple-system, BlinkMacSystemFont, "Segoe UI",\n  Roboto, Helvetica, Arial, sans-serif,\n  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      U = { large: 1170, medium: 960, small: 520 },
      T = F()(U).reduce((e, t) => e[t] = function () { return Object(L.a)(['@media (min-width:', 'px){', '}'], U[t], L.a.apply(void 0, arguments)) }, e, {}),
      G = N()(['\n    padding: 0 24px;\n  '], ['\n    padding: 0 24px;\n  ']),
      K = L.b.div.withConfig({ displayName: 'Container' })(['max-width:1024px;margin-left:auto;margin-right:auto;padding:0 12px;', ''], T.small(G)),
      Y = n(44),
      J = N()(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
      W = N()(['\n    margin-right: 32px;\n  '], ['\n    margin-right: 32px;\n  ']),
      Q = L.b.nav.withConfig({ displayName: 'Nav__StyledNav' })(['overflow-x:auto;-webkit-overflow-scrolling:touch;']),
      X = K.extend(J),
      Z = L.b.ul.withConfig({ displayName: 'Nav__NavList' })(['display:flex;flex-flow:row nowrap;align-items:center;flex-shrink:0;']),
      $ = L.b.li.withConfig({ displayName: 'Nav__NavItem' })(['flex-shrink:0;margin-right:24px;', ''], T.small(W)),
      ee = Object(L.b)(j.c).withConfig({ displayName: 'Nav__NavLink' })(["position:relative;display:block;padding:16px 0;font-size:1.4rem;font-weight:500;text-transform:uppercase;text-align:center;text-decoration:none;color:rgba(255,255,255,0.7);transition:all 120ms ease-out;&:hover,&:focus{color:white;outline:none;}&::after{content:'';position:absolute;right:0;bottom:0;left:0;height:2px;margin:0 auto;max-width:32px;background-color:rgba(255,255,255,0);transition:all 120ms ease-out;}&.", '{color:white;&::after{background-color:white;}}'], e => e.activeClassName),
      te = Object(j.g)(Object(k.b)('userStore')(Object(k.c)((e) => {
        let t = e.userStore,
          n = e.location,
          a = [{ exact: !0, to: '/', name: 'Hem' }, { to: '/recipes', name: 'Recept' }, { to: '/list', name: 'Inköpslista' }]; t.isAuthenticated && (a = [].concat(a, [{ to: '/favorites', name: 'Favoriter' }, { to: '/profile', name: 'Min profil' }])); const r = a.map(e => E.a.createElement($, { key: Object(Y.v4)() }, E.a.createElement(ee, {
          exact: e.exact, location: n, activeClassName: 'active', to: e.to,
        }, e.name))); return E.a.createElement(Q, null, E.a.createElement(X, null, E.a.createElement(Z, null, r)))
      }))),
      ne = Object(L.b)(j.c).withConfig({ displayName: 'HeaderProfile__Link' })(['display:flex;flex-flow:row nowrap;align-items:center;font-size:1.5rem;line-height:1.6em;text-decoration:none;color:', ';&:hover,&:focus{color:white;}&.', '{color:white;}'], 'rgba(255,255,255,0.8)', e => e.activeClassName),
      ae = L.b.img.withConfig({ displayName: 'HeaderProfile__Avatar' })(['width:24px;height:24px;border-radius:50%;margin-right:6px;background-color:rgba(255,255,255,0.5);']),
      re = Object(j.g)(Object(k.b)('userStore')(Object(k.c)((e) => { const t = e.userStore; return t.isAuthenticated ? E.a.createElement(ne, { to: '/profile' }, E.a.createElement(ae, { src: `${t.user.gravatar}?s=24`, alt: t.user.name }), E.a.createElement('span', null, t.user.name)) : E.a.createElement(ne, { to: '/login', activeClassName: 'active' }, 'Logga in') }))),
      ie = N()(['\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n'], ['\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n']),
      oe = N()(['\n    margin-bottom: 12px;\n  '], ['\n    margin-bottom: 12px;\n  ']),
      le = L.b.header.withConfig({ displayName: 'Header' })(['position:sticky;z-index:9;top:0;background:linear-gradient(to bottom right,', ',', ');box-shadow:0 0 16px ', ';backface-visibility:hidden;'], R.orange500, R.red400, 'rgba(0,0,0,0.12)'),
      ce = K.extend(ie),
      se = Object(L.b)(j.b).withConfig({ displayName: 'Header__Logo' })(['display:flex;flex-flow:row nowrap;align-items:center;margin:12px 0 0;color:white;font-size:3.2rem;text-decoration:none;', ' & span{margin-left:8px;font-size:2rem;font-weight:500;}'], T.small(oe)),
      pe = function () { return E.a.createElement(le, null, E.a.createElement(ce, null, E.a.createElement(se, { to: '/' }, E.a.createElement(q, { name: 'logo' }), E.a.createElement('span', null, 'Luncha')), E.a.createElement(re, null)), E.a.createElement(te, null)) },
      ue = L.b.footer.withConfig({ displayName: 'Footer__StyledFooter' })(['display:flex;flex-flow:column wrap;align-items:center;padding:16px 32px;']),
      me = L.b.p.withConfig({ displayName: 'Footer__P' })(['font-size:1.3rem;color:', ';'], R.gray500),
      de = function () { return E.a.createElement(ue, null, E.a.createElement(me, null, '© ', (new Date()).getFullYear(), ' luncha.co')) },
      he = N()(['\n    padding-top: 96px;\n    padding-bottom: 96px;\n  '], ['\n    padding-top: 96px;\n    padding-bottom: 96px;\n  ']),
      ge = L.b.section.withConfig({ displayName: 'Hero' })(['position:relative;display:flex;flex-flow:column wrap;justify-content:center;align-items:center;padding-top:64px;padding-bottom:64px;text-align:center;', ' ', ' > *:not(img){max-width:720px;}'], e => e.hasImage && '\n    height: 40vh;\n  ', T.small(he)),
      fe = L.b.img.withConfig({ displayName: 'Hero__Image' })(['position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;']),
      be = function (e) {
        let t = e.image,
          n = e.children,
          a = M()(e, ['image', 'children']); return E.a.createElement(ge, A()({ hasImage: !!t }, a), t && E.a.createElement(fe, { src: t, alt: '' }), n)
      },
      ye = n(16),
      ve = n.n(ye),
      xe = n(23),
      we = n.n(xe),
      Ee = n(24),
      ze = n.n(Ee),
      Ce = n(88),
      Oe = n.n(Ce),
      ke = n(177),
      je = n(66),
      Le = {
        PENDING: 'pending', LOADING: 'loading', LOADED: 'loaded', FAILED: 'failed',
      },
      Se = (function (e) {
        function t() {
          let n,
            a,
            r; ve()(this, t); for (var i = arguments.length, o = Array(i), l = 0; l < i; l++)o[l] = arguments[l]; return n = a = we()(this, e.call(...[this].concat(o))), a.state = { status: a.props.src ? Le.LOADING : Le.PENDING }, a.handleLoad = function () { a.destroyLoader(), a.setState({ status: Le.LOADED }) }, a.handleError = function () { a.destroyLoader(), a.setState({ status: Le.FAILED }) }, r = n, we()(a, r)
        } return ze()(t, e), t.prototype.componentDidMount = function () { this.state.status === Le.LOADING && this.createLoader() }, t.prototype.componentWillReceiveProps = function (e) { this.props.src !== e.src && this.setState({ status: e.src ? Le.LOADING : Le.PENDING }) }, t.prototype.componentDidUpdate = function () { this.state.status !== Le.LOADING || this.img || this.createLoader() }, t.prototype.createLoader = function () { this.destroyLoader(), this.img = new Image(), this.img.onload = this.handleLoad, this.img.onerror = this.handleError, this.img.src = this.props.src, this.img.complete && this.handleLoad() }, t.prototype.destroyLoader = function () { this.img && (this.img.onload = null, this.img.onerror = null, this.img = null) }, t.prototype.render = function () { switch (this.state.status) { case Le.LOADED: return E.a.createElement('img', { src: this.props.src, alt: this.props.alt }); case Le.FAILED: return this.props.fallback || E.a.createElement('div', null, 'Error'); default: return E.a.createElement(this.props.loader, null) || E.a.createElement('div', null, 'Loading') } }, t
      }(E.a.Component)),
      Ne = Object(L.d)(['0%{transform:scale(1);}50%{transform:scale(0.8);opacity:0.6;}100%{transform:scale(1);}']),
      _e = L.b.div.withConfig({ displayName: 'Loader__StyledLoader' })(['margin-top:4px;span{display:inline-block;margin:0 3px;border-radius:50%;width:6px;height:6px;background-color:', ';:nth-child(1){animation:', ' 1.4s infinite ease;}:nth-child(2){animation:', ' 1.4s infinite ease 160ms;}:nth-child(3){animation:', ' 1.4s infinite ease 320ms;}}', ''], R.gray300, Ne, Ne, Ne, e => e.white && '\n    & span {\n      background-color: white;\n    }\n  '),
      Ae = function (e) { return E.a.createElement(_e, e, E.a.createElement('span', null), E.a.createElement('span', null), E.a.createElement('span', null)) },
      He = E.a.createElement('div', null, E.a.createElement(q, { name: 'image' })),
      Me = function (e) { return E.a.createElement(Se, A()({}, e, { loader: Ae, fallback: He })) },
      De = N()(['\n  font-size: 2.2rem;\n\n  ', '\n\n  ', '\n'], ['\n  font-size: 2.2rem;\n\n  ', '\n\n  ', '\n']),
      Ie = N()(['\n    font-size: 3.2rem;\n  '], ['\n    font-size: 3.2rem;\n  ']),
      qe = N()(['\n    font-size: 3.8rem;\n  '], ['\n    font-size: 3.8rem;\n  ']),
      Be = N()(['\n  font-size: 1.5rem;\n  line-height: 1.2em;\n\n  ', '\n'], ['\n  font-size: 1.5rem;\n  line-height: 1.2em;\n\n  ', '\n']),
      Fe = N()(['\n    font-size: 2rem;\n  '], ['\n    font-size: 2rem;\n  ']),
      Pe = L.b.h1.withConfig({ displayName: 'Title' })(['line-height:1.4em;color:', ';'], R.gray900),
      Re = { H1: Pe.extend(De, T.small(Ie), T.medium(qe)), H3: Pe.extend(Be, T.small(Fe)).withComponent('h3') },
      Ve = N()(['\n    padding: 24px;\n  '], ['\n    padding: 24px;\n  ']),
      Ue = N()(['\n      font-size: 1.4rem;\n    '], ['\n      font-size: 1.4rem;\n    ']),
      Te = N()(['\n      font-size: 1.2rem;\n    '], ['\n      font-size: 1.2rem;\n    ']),
      Ge = N()(['\n    padding: 16px 24px 24px;\n  '], ['\n    padding: 16px 24px 24px;\n  ']),
      Ke = Object(L.b)(j.b).withConfig({ displayName: 'Card__StyledCard' })(['display:flex;flex-flow:column wrap;flex-grow:1;border-radius:3px;overflow:hidden;color:', ';text-decoration:none;background-color:white;transition:all 160ms ease-out;will-change:transform,box-shadow;&:hover,&:focus{outline:none;box-shadow:0 3px 32px ', ';transform:translateY(-2px);}'], R.gray900, Object(je.a)(R.gray900, 0.12)),
      Ye = L.b.div.withConfig({ displayName: 'Card__ImageContainer' })(['position:relative;width:100%;border-bottom:solid 1px ', ";::before{content:'';display:inline-block;padding-bottom:64%;}div{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:6.2rem;line-height:0;color:", '}img{position:absolute;top:0;left:0;height:100%;width:100%;object-fit:cover;overflow:hidden;}'], R.gray100, R.gray400),
      Je = L.b.div.withConfig({ displayName: 'Card__CardBody' })(['flex-grow:1;padding:12px 8px;text-align:center;', ''], T.small(Ve)),
      We = L.b.footer.withConfig({ displayName: 'Card__Footer' })(['display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 12px 12px;color:', ';svg{font-size:1em;vertical-align:text-bottom;', '}span{font-size:0.9rem;vertical-align:baseline;', '}', ''], R.gray700, T.small(Ue), T.small(Te), T.small(Ge)),
      Qe = function (e) { const t = Ke.withComponent('div'); return E.a.createElement(t, null, E.a.createElement(Ye, null, E.a.createElement(Me, { src: '' })), E.a.createElement(Je, null, E.a.createElement(Re.H3, null, e.title)), E.a.createElement(We, null)) },
      Xe = L.b.div.withConfig({ displayName: 'Card__Stars' })(['font-size:1rem;white-space:nowrap;']),
      Ze = function (e) { if (e.placeholder) return E.a.createElement(Qe, null); const t = Oe()({ length: Number(e.rating) }).map(() => E.a.createElement(q, { name: 'star-filled', key: Object(Y.v4)() })); return E.a.createElement(Ke, { to: `/recipes/${e.slug}` }, E.a.createElement(Ye, null, E.a.createElement(Me, { src: e.image, alt: e.title })), E.a.createElement(Je, null, E.a.createElement(Re.H3, null, e.title)), E.a.createElement(We, null, E.a.createElement('h6', null, E.a.createElement(q, { name: 'time' }), ' ', E.a.createElement('span', null, e.time, ' min')), E.a.createElement(Xe, null, t))) },
      $e = N()(['\n    padding-top: 64px;\n    padding-bottom: 64px;\n  '], ['\n    padding-top: 64px;\n    padding-bottom: 64px;\n  ']),
      et = L.b.section.withConfig({ displayName: 'Section' })(['padding-top:32px;padding-bottom:32px;background-color:', ';', ''], R.gray100, T.small($e)),
      tt = N()(['\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 12px;\n\n  ', '\n'], ['\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 12px;\n\n  ', '\n']),
      nt = N()(['\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 24px;\n  '], ['\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 24px;\n  ']),
      at = K.extend(tt, T.small(nt)),
      rt = Oe()({ length: 6 }).reduce((e, t, n) => { let a; return A()({}, e, (a = {}, a[`recipe-card-${n}`] = { placeholder: !0 }, a)) }, {}),
      it = (o = Object(k.b)('recipeStore'))(l = Object(k.c)(l = (function (e) { function t() { return ve()(this, t), we()(this, e.apply(this, arguments)) } return ze()(t, e), t.prototype.componentDidMount = function () { this.props.recipeStore.fetchRecipes() }, t.prototype.render = function () { let e = this.props.recipeStore.entities; Object(ke.a)(e) && (e = rt); const t = F()(e).map(t => E.a.createElement(Ze, A()({ key: t }, e[t]))); return E.a.createElement(et, null, E.a.createElement(at, null, t)) }, t }(E.a.Component))) || l) || l,
      ot = function () { return E.a.createElement('div', null, E.a.createElement(be, null, E.a.createElement(K, null, E.a.createElement(Re.H1, null, 'Upptäck nya recept. Planera din matlagning. Enkelt. ', E.a.createElement('span', { role: 'img', 'aria-label': 'pizza' }, '🍕')))), E.a.createElement(it, null)) },
      lt = n(67),
      ct = n.n(lt),
      st = n(96),
      pt = n.n(st),
      ut = n(97),
      mt = n.n(ut),
      dt = n(48),
      ht = n(98),
      gt = n.n(ht),
      ft = 'https://api.luncha.co/v1',
      bt = function e(t, n, a) { ve()(this, e), this.id = Object(Y.v4)(), this.title = t, this.amount = n, this.unit = a },
      yt = function e(t) { ve()(this, e), this.id = t.id, this.title = t.name, this.image = t.image, this.rating = t.rating, this.time = t.time, this.servings = t.servings, this.slug = t.slug, this.ingredients = [new bt('Köttfärs', 400, 'gram'), new bt('Mjöl', 1, 'dl'), new bt('Salt', 12, 'krm'), new bt('Smör', 100, 'gram'), new bt('Peppar', 4, 'krm')] },
      vt = new (c = (function () {
        function e() { ve()(this, e), a(this, 'recipes', s, this), a(this, 'currentRecipeSlug', p, this) } return e.prototype.fetchRecipes = function () { const e = this; gt()(`${ft}/recipes`).then(Object(dt.c)((t) => { const n = t.data.entities.reduce((e, t) => e[t.id] = new yt(t), e, {}); e.recipes = A()({}, n, e.entities) })).catch(e => console.error(e)) }, e.prototype.fetchRecipeBySlug = function (e) {
          const t = this; return gt()(`${ft}/recipe/${e}`).then(Object(dt.c)((e) => {
            let n,
              a = e.data; t.recipes = A()({}, t.entities, (n = {}, n[a.entity.id] = new yt(a.entity), n))
          })).catch(e => console.error(e))
        }, mt()(e, [{ key: 'entities', get() { return Object(dt.k)(this.recipes) } }, { key: 'currentEntityKey', get() { const e = this; return F()(this.entities).find(t => e.currentRecipeSlug === e.entities[t].slug) } }]), e
      }()), s = r(c.prototype, 'recipes', [dt.i], { enumerable: !0, initializer() { return dt.i.map({}) } }), p = r(c.prototype, 'currentRecipeSlug', [dt.i], { enumerable: !0, initializer() { return null } }), r(c.prototype, 'entities', [dt.d], pt()(c.prototype, 'entities'), c.prototype), r(c.prototype, 'currentEntityKey', [dt.d], pt()(c.prototype, 'currentEntityKey'), c.prototype), r(c.prototype, 'fetchRecipes', [dt.c], pt()(c.prototype, 'fetchRecipes'), c.prototype), r(c.prototype, 'fetchRecipeBySlug', [dt.c], pt()(c.prototype, 'fetchRecipeBySlug'), c.prototype), c)(),
      xt = Object(k.c)(() => E.a.createElement(it, { store: vt })),
      wt = function () { return E.a.createElement(be, null, E.a.createElement(K, null, E.a.createElement(Re.H1, null, '404 – Ojdå sidan hittades inte ', E.a.createElement('span', { role: 'img', 'aria-label': 'oops' }, '😳')))) },
      Et = Object(L.b)(et).withConfig({ displayName: 'Info' })(['text-align:center;']),
      zt = L.b.ul.withConfig({ displayName: 'Info__Details' })(['display:flex;flex-flow:row wrap;justify-content:center;margin-top:8px;font-size:1.3rem;color:', ';& > *{margin:6px;}'], R.gray800),
      Ct = function (e) { const t = e.recipe; return E.a.createElement(Et, null, E.a.createElement(Re.H1, null, t.title), E.a.createElement(zt, null, E.a.createElement('li', null, E.a.createElement('h4', null, E.a.createElement(q, { name: 'time' }), E.a.createElement('span', null, E.a.createElement('b', null, t.time), ' min'))), E.a.createElement('li', null, E.a.createElement('h4', null, E.a.createElement(q, { name: 'serving' }), E.a.createElement('span', null, E.a.createElement('b', null, t.servings), ' pers'))), E.a.createElement('li', null, E.a.createElement('h4', null, E.a.createElement(q, { name: 'star' }), E.a.createElement('span', null, E.a.createElement('b', null, t.rating), ' av 5'))))) },
      Ot = L.b.h1.withConfig({ displayName: 'Text' })(['font-size:1.6rem;line-height:1.6em;color:', ';'], R.gray900),
      kt = (u = Object(k.b)('recipeStore'))(m = Object(k.c)(m = (function (e) {
        function t() {
          let n,
            a,
            r; ve()(this, t); for (var i = arguments.length, o = Array(i), l = 0; l < i; l++)o[l] = arguments[l]; return n = a = we()(this, e.call(...[this].concat(o))), a.state = { isLoading: !0, hasError: !1 }, r = n, we()(a, r)
        } return ze()(t, e), t.prototype.componentDidMount = function () {
          let e = this,
            t = this.props,
            n = t.recipeStore,
            a = t.match; n.currentRecipeSlug = a.params.slug, n.fetchRecipeBySlug(a.params.slug).then(() => { e.setState({ isLoading: !1 }) }).catch(() => { e.setState({ isLoading: !1, hasError: !0 }) })
        }, t.prototype.render = function () {
          let e = this.props.recipeStore,
            t = e.entities[e.currentEntityKey]; return this.state.isLoading ? E.a.createElement('h1', null, 'Laddar...') : t ? E.a.createElement('main', null, E.a.createElement(be, { image: t.image }), E.a.createElement(Ct, { recipe: t }), E.a.createElement(et, null, E.a.createElement('div', null, E.a.createElement('h2', null, 'Det här behöver du'), E.a.createElement('ul', null, F()(t.ingredients).map(e => E.a.createElement('li', { key: t.ingredients[e].id }, E.a.createElement('b', null, t.ingredients[e].amount), ' ', E.a.createElement('span', null, t.ingredients[e].unit, ' ', t.ingredients[e].title)))), E.a.createElement('h2', null, 'Så här gör du'), E.a.createElement('ul', null, E.a.createElement('li', null, E.a.createElement(Ot, null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.')), E.a.createElement('li', null, E.a.createElement(Ot, null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.')), E.a.createElement('li', null, E.a.createElement(Ot, null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam, similique voluptate, optio culpa quo totam? Excepturi natus sapiente atque.')))))) : E.a.createElement(wt, null)
        }, t
      }(E.a.Component))) || m) || m,
      jt = n(201),
      Lt = n.n(jt),
      St = L.b.div.withConfig({ displayName: 'Form__View' })(['display:flex;flex-flow:column wrap;align-items:center;padding:64px 24px;']),
      Nt = L.b.form.withConfig({ displayName: 'Form__StyledForm' })(['display:flex;flex-flow:column wrap;align-items:center;width:100%;max-width:280px;font-size:1.3rem;> a{margin-top:24px;}']),
      _t = function (e) { return E.a.createElement(St, null, E.a.createElement(Nt, e)) },
      At = Object(L.b)(j.c).withConfig({ displayName: 'Link' })(['appearance:none;outline:none;font-family:inherit;font-size:inherit;line-height:1.6em;color:', ';text-decoration:none;border-bottom:dotted 1px ', ';transition:all 120ms ease-out;:hover{background-color:', ';}:active{background-color:', ';border-style:solid;}'], R.orange500, Object(je.a)(R.orange500, 0.5), Object(je.a)(R.orange500, 0.08), Object(je.a)(R.orange500, 0.16)),
      Ht = (At.withComponent('a'), At),
      Mt = L.b.input.withConfig({ displayName: 'TextField__Input' })(['display:block;padding:8px 12px;width:100%;border:solid 2px ', ';border-radius:3px;font-size:1.6rem;color:', ';appearance:none;box-shadow:none;transition:border-color 120ms ease-out;:focus{outline:none;border-color:', ';}'], R.gray300, R.gray900, Object(je.a)(R.red500, 0.5)),
      Dt = L.b.label.withConfig({ displayName: 'TextField__Label' })(['width:100%;display:block;margin-bottom:6px;font-size:1.3rem;line-height:1em;font-weight:700;color:', ';'], R.gray900),
      It = L.b.div.withConfig({ displayName: 'TextField__StyledTextField' })(['position:relative;margin-bottom:32px;width:100%;', ''], e => e.error && `\n    & input {\n      border-color: ${R.red500};\n    }\n  `),
      qt = L.b.span.withConfig({ displayName: 'TextField__ErrorMessage' })(['position:absolute;top:100%;left:0;margin-top:4px;font-size:1.2rem;line-height:1.4rem;color:', ';'], R.red500),
      Bt = function (e) {
        let t = e.label,
          n = e.errorMessage,
          a = e.error,
          r = void 0 !== a && a,
          i = M()(e, ['label', 'errorMessage', 'error']); return E.a.createElement(It, { error: r }, E.a.createElement(Dt, { htmlFor: i.id }, t), E.a.createElement(Mt, i), r && n && E.a.createElement(qt, null, n))
      },
      Ft = L.b.button.withConfig({ displayName: 'Button' })(['display:inline-block;vertical-align:top;appearance:none;outline:none;border:0;border-radius:2px;padding:15px 24px;font-family:', ';font-size:1.2rem;font-weight:700;line-height:1em;text-align:center;text-transform:uppercase;text-decoration:none;color:white;background:linear-gradient(to right,', ',', ');cursor:pointer;transition:all 120ms ease-out;will-change:transform,box-shadow;:hover{transform:translateY(-1px);box-shadow:0 2px 8px rgba(0,0,0,0.2);}', '{margin-top:0;}'], V, R.orange500, R.red400, _e),
      Pt = (Ft.withComponent('a'), function (e) {
        let t = e.loading,
          n = e.children,
          a = M()(e, ['loading', 'children']); return E.a.createElement(Ft, a, t ? E.a.createElement(Ae, { white: !0 }) : n)
      }),
      Rt = (d = Object(k.b)('userStore'))(h = Object(k.c)(h = (function (e) {
        function t() {
          let n,
            a,
            r; ve()(this, t); for (var i = arguments.length, o = Array(i), l = 0; l < i; l++)o[l] = arguments[l]; return n = a = we()(this, e.call(...[this].concat(o))), a.state = {
            status: '', error: !1, email: '', password: '',
          }, a.handleOnSubmit = function (e) {
            e.preventDefault(), a.setState({ loading: !0 }); let t = a.state,
              n = t.email,
              r = t.password; a.props.userStore.login({ email: n, password: r }).then((e) => { e && !e.success && a.setState({ loading: !1, error: !0 }) })
          }, a.handleOnChange = function (e) {
            let t,
              n = e.target; a.setState((t = {}, t[n.name] = n.value, t))
          }, r = n, we()(a, r)
        } return ze()(t, e), t.prototype.render = function () {
          if (this.props.userStore.isAuthenticated) {
            let e = Lt.a.parse(location.search).redirect,
              t = void 0 === e ? '/' : e; return E.a.createElement(j.d, { to: t })
          } return E.a.createElement(_t, { onSubmit: this.handleOnSubmit }, E.a.createElement(Bt, {
            id: 'formEmail', type: 'email', name: 'email', label: 'Epost', value: this.state.email, error: this.state.error, onChange: this.handleOnChange,
          }), E.a.createElement(Bt, {
            id: 'formPassword', type: 'password', name: 'password', label: 'Lösenord', value: this.state.password, error: this.state.error, errorMessage: 'Felaktigt användarnamn eller lösenord', onChange: this.handleOnChange,
          }), E.a.createElement(Pt, { loading: this.state.loading }, 'Logga in'), E.a.createElement(Ht, { to: '/register' }, 'Inget konto? Registrera'))
        }, t
      }(E.a.Component))) || h) || h,
      Vt = (g = Object(k.b)('userStore'))(f = Object(k.c)(f = (function (e) {
        function t() {
          ve()(this, t); const n = we()(this, e.call(this)); return n.state = {
            loading: !1, error: !1, email: '', password: '',
          }, n.handleOnSubmit = function (e) { e.preventDefault(), n.setState({ loading: !0 }), n.props.userStore.register(n.state).then((e) => { e && !e.success && n.setState({ loading: !1, error: !0 }) }) }, n.handleOnChange = n.handleOnChange.bind(n), n
        } return ze()(t, e), t.prototype.handleOnChange = function (e) {
          let t,
            n = e.target; this.setState((t = {}, t[n.name] = n.value, t))
        }, t.prototype.render = function () {
          return this.props.userStore.isAuthenticated ? E.a.createElement(j.d, { to: '/' }) : E.a.createElement(_t, { onSubmit: this.handleOnSubmit }, E.a.createElement(Bt, {
            id: 'formName', type: 'text', name: 'name', label: 'Namn', value: this.state.name, error: this.state.error, onChange: this.handleOnChange,
          }), E.a.createElement(Bt, {
            id: 'formEmail', type: 'email', name: 'email', label: 'Epost', value: this.state.email, error: this.state.error, onChange: this.handleOnChange,
          }), E.a.createElement(Bt, {
            id: 'formPassword', type: 'password', name: 'password', label: 'Lösenord', value: this.state.password, error: this.state.error, onChange: this.handleOnChange,
          }), E.a.createElement(Pt, { loading: this.state.loading }, 'Registrera'), E.a.createElement(Ht, { to: '/login' }, 'Logga in'))
        }, t
      }(E.a.Component))) || f) || f,
      Ut = N()(['\n  grid-gap: 32px 12px;\n  text-align: center;\n'], ['\n  grid-gap: 32px 12px;\n  text-align: center;\n']),
      Tt = K.extend(Ut),
      Gt = L.b.img.withConfig({ displayName: 'ProfileView__Avatar' })(['width:88px;height:88px;border-radius:50%;']),
      Kt = L.b.div.withConfig({ displayName: 'ProfileView__Details' })(['margin-top:12px;margin-bottom:24px;']),
      Yt = Object(L.b)(Ot).withConfig({ displayName: 'ProfileView__Email' })(['font-size:1.3rem;color:', ''], R.gray600),
      Jt = function (e) {
        let t = e.user,
          n = e.handleLogout; return E.a.createElement(et, null, E.a.createElement(Tt, null, E.a.createElement(Gt, { src: `${t.gravatar}?s=88`, alt: t.name }), E.a.createElement(Kt, null, E.a.createElement(Re.H3, null, t.name), E.a.createElement(Yt, null, t.email)), E.a.createElement(Pt, { onClick: n }, 'Logga ut')))
      },
      Wt = (b = Object(k.b)('userStore'))(y = Object(k.c)(y = (function (e) {
        function t() {
          let n,
            a,
            r; ve()(this, t); for (var i = arguments.length, o = Array(i), l = 0; l < i; l++)o[l] = arguments[l]; return n = a = we()(this, e.call(...[this].concat(o))), a.handleLogout = function () { a.props.userStore.logout() }, r = n, we()(a, r)
        } return ze()(t, e), t.prototype.render = function () { const e = this.props.userStore.user; return E.a.createElement('div', null, E.a.createElement(Jt, { user: e, handleLogout: this.handleLogout })) }, t
      }(E.a.Component))) || y) || y,
      Qt = function (e) { return Object(k.b)('userStore')(Object(k.c)(t => (t.userStore.isAuthenticated ? E.a.createElement(e, null) : E.a.createElement(j.d, { to: `/login?redirect=${t.match.url}` })))) },
      Xt = [{
        key: Object(Y.v4)(), path: '/', exact: !0, component: ot,
      }, {
        key: Object(Y.v4)(), path: '/recipes', exact: !0, component: xt,
      }, { key: Object(Y.v4)(), path: '/recipes/:slug', component: kt }, { key: Object(Y.v4)(), path: '/login', component: Rt }, { key: Object(Y.v4)(), path: '/register', component: Vt }, { key: Object(Y.v4)(), path: '/profile', component: Qt(Wt) }, { key: Object(Y.v4)(), component: wt }],
      Zt = (function (e) { function t() { return ve()(this, t), we()(this, e.apply(this, arguments)) } return ze()(t, e), t.prototype.componentDidUpdate = function (e) { this.props.location !== e.location && window.scrollTo(0, 0) }, t.prototype.render = function () { return null }, t }(E.a.Component)),
      $t = Object(j.g)(Zt),
      en = n(204),
      tn = n.n(en),
      nn = n(215),
      an = n.n(nn),
      rn = {
        userStore: new (v = (function () {
          function e() {
            ve()(this, e), (function (e, t, n, a) {
              n && ct()(e, t, {
                enumerable: n.enumerable, configurable: n.configurable, writable: n.writable, value: n.initializer ? n.initializer.call(a) : void 0,
              })
            }(this, 'user', x, this)); const t = an.a.get('user'); t && (this.user = t, this.setAxiosAuthHeader(), this.fetchUser(t.token))
          } return e.prototype.setAxiosAuthHeader = function () { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.user.token; gt.a.defaults.headers.common.Authorization = `Bearer ${e}` }, e.prototype.fetchUser = function (e) { const t = this; gt.a.post(`${ft}/profile`).then(Object(dt.c)((n) => { const a = n.data; t.user = A()({ token: e }, a), an.a.set('user', t.user) })).catch((e) => { console.error(e.response.data), t.logout() }) }, e.prototype.login = function (e) { const t = this; return new tn.a(((n) => { gt.a.post(`${ft}/login`, e).then((e) => { const a = e.data; t.setAxiosAuthHeader(a.token), t.fetchUser(a.token), n(a) }).catch(() => { n({ sucess: !1 }) }) })) }, e.prototype.logout = function () { this.user = {}, an.a.remove('user'), gt.a.defaults.headers.common.Authorization = null }, e.prototype.register = function (e) { const t = this; return new tn.a(((n) => { gt.a.post(`${ft}/register`, e).then((e) => { const a = e.data; a.success && t.fetchUser(a.token), n(a) }).catch((e) => { n(e) }) })) }, mt()(e, [{ key: 'isAuthenticated', get() { return !!this.user.token } }]), e
        }()), x = i(v.prototype, 'user', [dt.i], { enumerable: !0, initializer() { return {} } }), i(v.prototype, 'isAuthenticated', [dt.d], pt()(v.prototype, 'isAuthenticated'), v.prototype), i(v.prototype, 'fetchUser', [dt.c], pt()(v.prototype, 'fetchUser'), v.prototype), i(v.prototype, 'login', [dt.c], pt()(v.prototype, 'login'), v.prototype), i(v.prototype, 'logout', [dt.c], pt()(v.prototype, 'logout'), v.prototype), i(v.prototype, 'register', [dt.c], pt()(v.prototype, 'register'), v.prototype), v)(),
        recipeStore: vt,
      },
      on = function (e) { return function (t) { return Object(L.c)(P, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", V, R.orange500), E.a.createElement(e, t) } },
      ln = L.b.div.withConfig({ displayName: 'App__Container' })(['display:flex;flex-flow:column wrap;min-height:100vh;']),
      cn = L.b.main.withConfig({ displayName: 'App__Main' })(['flex-grow:1;']),
      sn = on(() => E.a.createElement(k.a, rn, E.a.createElement(j.a, null, E.a.createElement(ln, null, E.a.createElement($t, null), E.a.createElement(pe, null), E.a.createElement(cn, null, E.a.createElement(j.f, null, Xt.map(e => E.a.createElement(j.e, e)))), E.a.createElement(de, null))))),
      pn = function (e) { C.a.render(E.a.createElement(O.AppContainer, null, E.a.createElement(e, null)), document.getElementById('root')) }; pn(sn), n(226).install()
  },
}, [108])
