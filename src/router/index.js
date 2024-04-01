import App from '../App'
import Article from '../pages/Article'
import Login from '../pages/Login'


import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/article',
    element: <Article />,
  },
])

export default router
