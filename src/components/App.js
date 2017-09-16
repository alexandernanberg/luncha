import React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/es'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import routes from '../routes'
import ScrollTop from './ScrollTop'
import stores from '../stores'
import InjectGlobalStyles from './InjectGlobalStyles'

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

const App = () => (
  <Provider {...stores}>
    <Router>
      <Container>
        <ScrollTop />
        <InjectGlobalStyles />
        <Header />
        <Main>
          <Switch>
            {routes.map(props => <Route {...props} />)}
          </Switch>
        </Main>
        <Footer />
      </Container>
    </Router>
  </Provider>
)

export default App
