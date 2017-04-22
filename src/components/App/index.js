import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import routes from './routes'

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        { routes.map(props => <Route {...props} />) }
      </Switch>
    </div>
  </Router>

export default App
