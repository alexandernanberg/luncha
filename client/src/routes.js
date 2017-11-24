import { v4 } from 'uuid'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Recipe from './pages/Recipe'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import withAuth from './components/hoc/withAuth'

const routes = [
  {
    key: v4(),
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: v4(),
    path: '/recipes',
    exact: true,
    component: Archive,
  },
  {
    key: v4(),
    path: '/recipes/:slug',
    component: Recipe,
  },
  {
    key: v4(),
    path: '/login',
    component: Login,
  },
  {
    key: v4(),
    path: '/register',
    component: Register,
  },
  {
    key: v4(),
    path: '/profile',
    component: withAuth(Profile),
  },
  {
    key: v4(),
    component: PageNotFound,
  },
]

export default routes
