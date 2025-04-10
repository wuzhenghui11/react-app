import { Form, Butto, Input, Checkbox, Button } from 'antd'
import {
  useState,
  useRef,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Login.scss'

function Login () {
  const navigate = useNavigate()
  const inputRef = useRef(null)

  function reset () {
    
  }

  return (
    <div className="login-wrapper">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form>
      <Button onClick={reset}>重置</Button>
      <Button type='primary' onClick={() => {navigate('/')}}>Login</Button>
    </div>
  )
}

export default Login
