import { ConfigProvider } from 'antd'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, Outlet } from 'react-router-dom'
import router from './router'

import store from './store'
import { Provider } from 'react-redux'

import 'normalize.css'

// import './theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#00b96b',
          borderRadius: 2,

          // 派生变量，影响范围小
          colorBgContainer: '#f6ffed',
        },
        }}>
        <RouterProvider router={ router }></RouterProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
