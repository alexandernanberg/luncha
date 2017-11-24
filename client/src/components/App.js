import React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/es'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import routes from '../routes'
import ScrollTop from './ScrollTop'
import stores from '../stores'
import withGlobalStyle from './hoc/withGlobalStyle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

const App = () => (
  <Provider {...stores}>
    <Router>
      <Container>
        <Helmet
          titleTemplate="%s – Luncha"
          defaultTitle="Luncha – Hitta nya recept och inspirera ditt matlagande"
        />
        <ScrollTop />
        <Header />
        <Main>
          <Switch>
            {routes.map(({ id, ...props }) => (
              <Route key={id} {...props} />
            ))}
          </Switch>
        </Main>
        <Footer />
      </Container>
    </Router>
  </Provider>
)

export default withGlobalStyle(App)
