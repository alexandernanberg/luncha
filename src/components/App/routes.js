import { v4 } from 'uuid'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Single from '../../pages/Single'
import NotFound from '../../pages/NotFound'

const routes = [
  {
    key: v4(),
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: v4(),
    path: '/about',
    component: About,
  },
  {
    key: v4(),
    path: '/recept/:slug',
    component: Single,
  },
  {
    key: v4(),
    component: NotFound,
  },
]

export default routes
