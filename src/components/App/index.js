import React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import routes from './routes'
import ScrollRestoration from './ScrollRestoration'
import stores from '../../stores'
import style from './style.scss'

const App = () => (
  <Provider {...stores}>
    <Router>
      <ScrollRestoration>
        <div className={style.component}>
          <Header />
          <Switch>
            {routes.map(props => <Route {...props} />)}
          </Switch>
          <Footer />
        </div>
      </ScrollRestoration>
    </Router>
  </Provider>
)

export default App
