import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import routes from './routes'
import ScrollRestoration from './ScrollRestoration'

const App = () => (
  <Router>
    <ScrollRestoration>
      <div style={{ minHeight: '100vh', display: 'flex', flexFlow: 'column wrap' }}>
        <Header />
        <Switch>
          {routes.map(props => <Route {...props} />)}
        </Switch>
        <Footer />
      </div>
    </ScrollRestoration>
  </Router>
)

export default App
