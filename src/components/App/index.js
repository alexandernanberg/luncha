import React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/es'
import Header from '../Header'
import Footer from '../Footer'
import routes from './routes'
import ScrollRestoration from './ScrollRestoration'
import stores from '../../stores'
import './globalStyles'

const App = () => (
  <Provider {...stores}>
    <Router>
      <ScrollRestoration>
        <div>
          <Header />
          <main>
            <Switch>
              {routes.map(props => <Route {...props} />)}
            </Switch>
          </main>
          <Footer />
        </div>
      </ScrollRestoration>
    </Router>
  </Provider>
)

export default App
