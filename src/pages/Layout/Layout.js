import { Button, Menu, Popconfirm, message } from 'antd'
// import { createContext, useState, useRef, useContext, forwardRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames'
import { clearUserInfo } from '@/store/user/userStore';
import { useDispatch } from 'react-redux';

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
    label: 'searchParams和Params',
  },
  {
    key: '/MemoForwardRef',
    label: 'memo和forwardRef',
  },
  {
    key: '/useCallback',
    label: 'useCallback',
  },
  {
    key: '/useReducer',
    label: 'useReducer',
  },
  {
    key: '/useInperativeHandle',
    label: 'useInperativeHandle',
  },
]

function Layout () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const type = 1

  function menuClick (item) {
    console.log(item);
    const path = item.key
    navigate(path)
  }

  const confirm = (e) => {
    console.log(e);
    dispatch(clearUserInfo())
    navigate('/login')
    message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  return (
    <div className="home">
      <div className="nav">
        <div className="top-bar">
          <div className={classNames("nav-item")}>
            <Popconfirm
              title="到登录"
              description="确定要退出去登录页吗?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary">login</Button>
            </Popconfirm>
            </div>
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
