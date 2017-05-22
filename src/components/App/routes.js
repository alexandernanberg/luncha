import { v4 } from 'uuid'
import Home from '../../pages/Home'
import Archive from '../../pages/Archive'
import Single from '../../pages/Single'
import PageNotFound from '../../pages/PageNotFound'
import Login from '../../pages/Login'

const routes = [
  {
    key: v4(),
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: v4(),
    path: '/recept',
    exact: true,
    component: Archive,
  },
  {
    key: v4(),
    path: '/recept/:slug',
    component: Single,
  },
  {
    key: v4(),
    path: '/login',
    component: Login,
  },
  {
    key: v4(),
    component: PageNotFound,
  },
]

export default routes
