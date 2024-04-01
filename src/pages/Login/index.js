import { Button } from 'antd'
import { createContext, useState, useRef, useContext, forwardRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, asyncSetCount } from '../../store/modules/counterStore.js'

// 默认null
const MsgContext = createContext(null)

function useToggle () {
  const [boolean, setBoolean] = useState(true)
  return {
    boolean,
    toggle: () => setBoolean(!boolean),
  }
}

const Input = forwardRef(function Input (props, ref) {
  const msg = useContext(MsgContext)
  const { value, onChange } = props
  console.log(props)
  const [val, setVal] = useState(value)

  function valChange (e) {
    console.log(e, msg)
    setVal(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div>
      <input
        value={val}
        onChange={(e) => valChange(e)}
        ref={ref}
        type="text"/>
    </div>
  )
})

function Login () {
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const count = useSelector((state) => {
    console.log(state)
    return state.counter.value
  })
  const dispatch = useDispatch()

  const [value, setValue] = useState('是否')
  const [msg, setMsg] = useState(1)

  const { boolean, toggle } = useToggle()

  const getVal = (val) => {
    setValue(val)
    return val
  }

  function onDefaultBtnClick () {
    dispatch(decrement())
  }

  function onBtnClick () {
    dispatch(increment())

    setMsg(msg + 1)
    toggle()
    console.log(inputRef)
  }

  function onTextBtnClick () {
    dispatch(incrementByAmount(10))
  }

  function onAsyncSetCount () {
    dispatch(asyncSetCount(20))
  }

  useEffect(() => {
    console.log('Input Changed')
  }, [value])

  useEffect(() => {
    dispatch(asyncSetCount(30))
    console.log('Count changed')
  }, [dispatch])

  return (
    <MsgContext.Provider value={msg}>
      <div className="login-wrap">
        <Input value={value} onChange={getVal} ref={inputRef}></Input>
        <p >{value}{boolean ? '✔️' : '❎'}</p>
        <p>{count}</p>

        <Button type="primary" onClick={onBtnClick}>increment</Button>
        <Button onClick={onDefaultBtnClick}>decrement</Button>
        <Button type="text" onClick={onTextBtnClick}>decrementByAmount</Button>
        <Button onClick={onAsyncSetCount}>asyncSetCount</Button>
        

        <Button type="primary" onClick={() => navigate('/article')}>go to articel</Button>
      </div>
    </MsgContext.Provider>
  )
}

export default Login
