import { Button, Menu } from 'antd'
// import { createContext, useState, useRef, useContext, forwardRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames'

import './Layout.css'

const items = [
  {
    key: '/about',
    label: 'about',
  },
  {
    key: '/article',
    label: 'article',
  },
  {
    key: '/learnReduxToolkitReduxReact',
    label: 'learnReduxToolkitReduxReact',
  },
  {
    key: '/searchParamsParams/1001?aa=12',
    label: 'searchParamsParams',
  },
  {
    key: '/other',
    label: 'other',
  },
]

function Layout () {
  const navigate = useNavigate()
  const type = 1

  function menuClick (item) {
    console.log(item);
    const path = item.key
    navigate(path)
  }

  return (
    <div className="home">
      <div className="nav">
        <div className="top-bar">
          <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/login')}>login</Button></div>
          <div className={classNames("nav-item", {active: type === 1})}><Button type="primary" onClick={() => navigate('/')}>home</Button></div>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          items={items}
          onClick={menuClick}
        />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
