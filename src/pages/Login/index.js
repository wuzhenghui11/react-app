import { Button } from 'antd'
import {
  createContext,
  useState,
  useRef,
  useContext,
  forwardRef,
  useEffect,
  useMemo, /* 缓存计算结果 */
  useCallback, /* 缓存函数 */
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, asyncSetCount } from '../../store/modules/counterStore.js'

// 默认null
const MsgContext = createContext(null)

// 改变 icon
function useToggle () {
  const [boolean, setBoolean] = useState(true)
  return {
    boolean,
    toggle: () => setBoolean(!boolean),
  }
}

const Input = forwardRef(function Input (props, ref) {
  // 子组件接受的 Provider
  const msg = useContext(MsgContext)
  const { value, onChange } = props
  function valChange (e) {
    console.log(e)
    // 执行 父组件的时间并传值
    onChange(e.target.value)
  }
  
  return (
    <div>
      <p>Provider: {msg}</p>
      <input
        value={value}
        onChange={(e) => valChange(e)}
        ref={ref}
        type="text"/>
    </div>
  )
})

// 缓存计算
function CalcComponent () {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // 只有当 count1 发生改变事才会改变计算渲染 只有在 count1 发生变化时才会渲染
  const result = useMemo(() => {
    return count1 + count2
  }, [count1])

  return (
    <p className="calc">
      <Button type="primary" onClick={() => setCount1(count1 + 1)}>+1</Button>
      <Button type="primary" onClick={() => setCount2(count2 + 1)}>+1</Button>
      {result}
    </p>
  )
}

function Login () {
  const navigate = useNavigate()
  const inputRef = useRef(null)

  /* function reducer (state, action) {
    switch (action.type) {
      case '1':
        return state + 1
      case '2':
        return state + 2
      case '3':
        return action.payload
      default:
        return state
    }
  }
  // 组件中掉用 返回 [state, dispatch]
  // dispath({type: '1'}) 通知 reducer 产生一个新的状态 使用这个新状态更新UI
  const [state, dispatch] = useReducer(reducer, 0) */

  const count = useSelector((state) => {
    console.log(state)
    return state.counter.value
  })
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('子传父')
  // Provider 的信息
  const [msg, setMsg] = useState('hello')

  const { boolean, toggle } = useToggle()

  const getVal = (val) => {
    console.log(val)
    setInputValue(val)
    return val
  }

  function onIncrementBtnClick () {
    dispatch(increment())
    toggle()
    // 修改 Provider 信息
    setMsg(`${msg}${count}:`)
    console.log(inputRef)
  }

  function onDecrementBtnClick () {
    dispatch(decrement())
    setInputValue(count)
  }

  function onDecrementByAmountBtnClick () {
    dispatch(incrementByAmount(10))
  }

  function onAsyncSetCountBtnClick () {
    dispatch(asyncSetCount(20))
  }

  useEffect(() => {
    console.log('Input Changed')
  }, [inputValue])

  useEffect(() => {
    // 会立即执行
    dispatch(asyncSetCount(0))
    console.log('Count changed')
  }, [dispatch])

  return (
    <MsgContext.Provider value={msg}>
      <div className="login-wrap">
        <Input value={inputValue} onChange={getVal} ref={inputRef}></Input>
        <p>input:{inputValue}</p>
        <p>toggle:{boolean ? '✔️' : '❎'}</p>
        <p>{count}</p>

        <Button type="primary" onClick={onIncrementBtnClick}>increment</Button>
        <Button onClick={onDecrementBtnClick}>decrement</Button>
        <Button type="text" onClick={onDecrementByAmountBtnClick}>decrementByAmount</Button>
        <Button onClick={onAsyncSetCountBtnClick}>asyncSetCount</Button>

        <CalcComponent></CalcComponent>

        <p><Button type="primary" onClick={() => navigate('/article')}>go to articel</Button></p>
      </div>
    </MsgContext.Provider>
  )
}

export default Login
