import { Button } from 'antd'
// import { createContext, useState, useRef, useContext, forwardRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Layout () {
  const navigate = useNavigate()

  return (
    <div>
      <Button type="primary" onClick={() => navigate('/login')}>go to login</Button>
      <Button type="primary" onClick={() => navigate('/about')}>go to about</Button>
      <Button type="primary" onClick={() => navigate('/article')}>go to article</Button>
      <Outlet/>
    </div>
  )
}

export default Layout
