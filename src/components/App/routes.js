import shortid from 'shortid'
import Home from '../../pages/Home'
import Archive from '../../pages/Archive'
import Single from '../../pages/Single'
import PageNotFound from '../../pages/PageNotFound'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const routes = [
  {
    key: shortid(),
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: shortid(),
    path: '/recept',
    exact: true,
    component: Archive,
  },
  {
    key: shortid(),
    path: '/recept/:slug',
    component: Single,
  },
  {
    key: shortid(),
    path: '/login',
    component: Login,
  },
  {
    key: shortid(),
    path: '/register',
    component: Register,
  },
  {
    key: shortid(),
    component: PageNotFound,
  },
]

export default routes
