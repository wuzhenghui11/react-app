import App from '../App'

import Layout from '../pages/Layout'

import Article from '../pages/Article'
import About from '../pages/About'
import Login from '../pages/Login'

import NotFound from '../pages/NotFound'


import { createBrowserRouter, /* createHashRouter */ } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // path: 'app',
        index: true,
        element: <App />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'article',
        element: <Article />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
])

export default router
