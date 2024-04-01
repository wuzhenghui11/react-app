import App from '../App'

import Layout from '@/pages/Layout'
import Board from '@/pages/Board'

import Article from '../pages/Article'
import About from '../pages/About'
import Login from '../pages/Login'

import NotFound from '../pages/NotFound'

import AuthRoute from '@/components/AuthRoute'


import { createBrowserRouter, /* createHashRouter, */ /* Navigate, 组件 */ } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><App /></AuthRoute>,
    children: [
      {
        index: true,
        element: <Board />,
      },
      {
        path: 'about',
        element: <About />,
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
