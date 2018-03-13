import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/es'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import routes from '../routes'
import ScrollTop from './ScrollTop'
import { injectGlobalStyle } from '../style'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

class App extends React.Component {
  componentDidMount() {
    injectGlobalStyle()
  }

  render() {
    return (
      <Provider>
        <Router>
          <Container>
            <Helmet
              titleTemplate="%s – Luncha"
              defaultTitle="Luncha – Hitta nya recept och inspirera ditt matlagande"
            />
            <ScrollTop />
            <Header />
            <Switch>{routes.map(({ id, ...props }) => <Route key={id} {...props} />)}</Switch>
            <Footer />
          </Container>
        </Router>
      </Provider>
    )
  }
}

export default App
