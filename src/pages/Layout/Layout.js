import { Button } from 'antd'
// import { createContext, useState, useRef, useContext, forwardRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames'

import './Layout.css'

function Layout () {
  const navigate = useNavigate()
  const type = 1

  return (
    <div className="home">
      <div className="nav">
        <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/login')}>login</Button></div>
        <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/')}>home</Button></div>
        <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/about')}>about</Button></div>
        <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/article')}>learn 组件间传递属性</Button></div>
        <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/learnReduxToolkitReduxReact')}>ReduxToolkitReduxReact</Button></div>
        <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/searchParamsParams/1001?aa=22')}>searchParamsParams</Button></div>
        <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/other')}>other</Button></div>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
