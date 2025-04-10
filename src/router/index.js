import { Suspense, lazy } from 'react'
import { createBrowserRouter, /* createHashRouter, */ /* Navigate, 组件 */ } from 'react-router-dom'

const App = lazy(() => import('../App'))

const Layout = lazy(() => import('@/pages/Layout/Layout'))
const Board = lazy(() => import('@/pages/Board'))

const Article = lazy(() => import('@/pages/Article'))
const About = lazy(() => import('@/pages/About'))
const Login = lazy(() => import('@/pages/Login'))
const ReduxToolkitReduxReact = lazy(() => import('@/pages/Learn/ReduxToolkitReduxReact'))
const SearchParamsParams = lazy(() => import('@/pages/Learn/SearchParamsParams.js'))
const Other = lazy(() => import('@/pages/Learn/Other.js'))


const NotFound = lazy(() => import('@/pages/NotFound'))
const AuthRoute = lazy(() => import('@/components/AuthRoute'))

// 两种路由模式 history和hash模式 分别由 createBrowserRouter 和 createHashRouter 函数创建
const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={'加载中'}><AuthRoute><App /></AuthRoute></Suspense>,
    children: [
      {
        // 当访问的是一级路由时，默认的二级路由组件可以得到渲染，只需要在二级路由的位置去掉path，设置index属性为true
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
      {
        path: 'learnReduxToolkitReduxReact',
        element: <ReduxToolkitReduxReact />,
      },
      {
        path: 'searchParamsParams/:id',
        element: <SearchParamsParams />,
      },
      {
        path: 'Other',
        element: <Other />
      }
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
