import { Form, Butto, Input, Checkbox, Button } from 'antd'
import {
  useState,
  useRef,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/user/userStore'

import './Login.scss'

function Login () {
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const dispatch = useDispatch()

  const [form] = Form.useForm()

  async function onFinish (values) {
    console.log(values);
    await dispatch(fetchLogin(values))
    navigate('/')
    
  }

  function login () {
    console.dir(form.getFieldValue());
    console.log(form.getFieldValue('username'), form.getFieldValue('password'));
  }

  return (
    <div className="login-wrapper">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="login-form"
      >
        <Form.Item
          label="手机号"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入手机号！",
            },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: "请输入正确手机号！"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null} wrapperCol={{ span: 24, }}>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit" onClick={login}>登录</Button>
        </Form.Item>
      </Form>
      
    </div>
  )
}

export default Login
