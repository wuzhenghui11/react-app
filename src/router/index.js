import { Suspense, lazy } from 'react'
import { createBrowserRouter, /* createHashRouter, */ /* Navigate, 组件 */ } from 'react-router-dom'

const App = lazy(() => import('../App'))

const Layout = lazy(() => import('@/pages/Layout'))
const Board = lazy(() => import('@/pages/Board'))

const Article = lazy(() => import('@/pages/Article'))
const About = lazy(() => import('@/pages/About'))
const Login = lazy(() => import('@/pages/Login'))
const LearnReduxToolkitReduxReact = lazy(() => import('@/pages/LearnReduxToolkitReduxReact'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const AuthRoute = lazy(() => import('@/components/AuthRoute'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={'加载中'}><AuthRoute><App /></AuthRoute></Suspense>,
    children: [
      {
        index: true,
        element: <Suspense fallback={'加载中'}><Board /></Suspense>,
      },
      {
        path: 'about',
        element: <Suspense fallback={'加载中'}><About /></Suspense>,
      },
      {
        path: 'article',
        element: <Suspense fallback={'加载中'}><Article /></Suspense>,
      },
      {
        path: 'learnReduxToolkitReduxReact',
        element: <Suspense fallback={'加载中'}><LearnReduxToolkitReduxReact /></Suspense>,
      },
    ]
  },
  {
    path: '/login',
    element: <Suspense fallback={'加载中'}><Login /></Suspense>,
  },
  {
    path: '*',
    element: <Suspense fallback={'加载中'}><NotFound /></Suspense>,
  }
])

export default router
