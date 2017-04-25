import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import routes from './routes'
import ScrollRestoration from './ScrollRestoration'

const App = () =>
  <Router>
    <ScrollRestoration>
      <div>
        <Header />
        <Switch>
          {routes.map(props => <Route {...props} />)}
        </Switch>
      </div>
    </ScrollRestoration>
  </Router>

export default App
