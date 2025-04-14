import { Button } from 'antd'
import {
  createContext,
  useState,
  useRef,
  useContext,
  forwardRef,
  useEffect, /* 1.依赖项为空 组件更新时会执行 2.空数组时 组件初始化会执行一次 3.不为空时 指定的依赖项更新时会执行 */
  useMemo, /* 缓存计算结果 */
  memo, /* 经过 memo 包裹生成的缓存组件 只有在 props 发生变化时才会重新渲染 */
  useCallback, /* 缓存函数 函数时引用类型会触发子组件重新渲染 所以缓存函数不会触发重新渲染 */
  useReducer, /* 修改 state 的目的 通过 dispatch 修改state */
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  asyncSetCount,
} from '../../store/modules/counterStore.js'

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

// 使用 ref暴露DOM 节点给父组件
// 父组件通过ref获取到子组件内部的input元素 让其聚焦
const InputComponent = forwardRef(function InputComponent (props, ref) {
  // 子组件接受的 Provider
  const msg = useContext(MsgContext)
  const { value, onChange } = props
  function valChange (e) {
    console.log(e)
    // 执行 父组件的时间并传值
    onChange(e.target.value)
  }
  console.log('我InputComponent 重新渲染了')
  
  return (
    <div style={{border: "1px solid gray"}}>
      <h2>Input 组件</h2>
      <p>Provider: {msg}</p>
      <input
        value={value}
        onChange={(e) => valChange(e)}
        ref={ref}
        type="text"/>
    </div>
  )
})

// react 组件默认的渲染机制：只要父组件重新渲染子组件就会重新渲染
// 
/* 
  缓存计算 作用允许 Props 没有改变的情况下跳过渲染，pp（基本类型）没有变则子组件不会重新渲染。如果属性是引用类型，子组件也会变(对比的是引用地址)
  要想属性为引用类型时 子组件不变则用 useMemo 包裹 产生一个不变的属性。方法则是useCallback
*/
// 经过memo 包裹的的组件只有在 count1 发生改变才会重新渲染
const MemoCalcComponent = memo(function CalcComponent ({pp}) {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  console.log('我子组件改变了')

  // 只有当 count1 发生改变事才会改变计算渲染 只有在 count1 发生变化时才会渲染 另外使子组件不重新渲染 如果子组件属性是引用类型
  const result = useMemo(() => {
    return count1 + count2
  }, [count1])

  return (
    <div className="calc">
      <h2>memo方法包裹的组件</h2>
      <Button type="primary" onClick={() => setCount1(count1 + 1)}>+1 count1 有 useMomo 会计算渲染</Button>-
      {/* 点击count2 button 不会更新 */}
      <Button type="primary" onClick={() => setCount2(count2 - 1)}>+1 count2 不会重新渲染子组件</Button>
      {result} -- {pp}
    </div>
  )
})

function MemoForwardRef () {
  const navigate = useNavigate()
  const InputComponentRef = useRef(null)

  const count = useSelector((state) => {
    console.log(state)
    return state.counter.value
  })
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')

  // Provider 的信息
  const [msg, setMsg] = useState('hello')

  const { boolean, toggle } = useToggle()

  // list 放在组件外，子组件也不会重新渲染 说明每次父组件重新渲染 导致引用也变了
  // const list = [1, 2, 3]
  // 使用 useMemo 包裹 子组件也不会重新渲染
  const list = useMemo(() => {
    return [1, 2, 3]
  }, [])
  
  const inputChange = (val) => {
    console.log(val)
    setInputValue(val)
    return val
  }

  const changeIcon = () => {
    toggle()
  }

  const seInputComponentFocus = () => {
    console.dir(InputComponentRef);
    InputComponentRef.current.focus()
  }

  function setProviderMsg () {
    // 修改 Provider 信息
    setMsg(`${msg}${count}`)
  }

  function onIncrementBtnClick () {
    dispatch(increment())
    console.log(InputComponentRef)
  }

  function onDecrementBtnClick () {
    dispatch(decrement())
  }

  function onDecrementByAmountBtnClick () {
    dispatch(incrementByAmount(10))
  }

  function onAsyncSetCountBtnClick () {
    dispatch(asyncSetCount(20))
  }

  // 1.没有依赖项 初始和组件更新
  // 2.空数组 初始执行
  // 3.特定的依赖项 初始和特定的依赖项
  useEffect(() => {
    console.log('父组件更新时就会执行')
  })

  useEffect(() => {
    console.log('input Changed')
    // inputValue 更新时会执行
  }, [inputValue])

  useEffect(() => {
    // 会立即执行
    dispatch(asyncSetCount(0))
    console.log('Count changed')
    return () => {
      // 清楚副作用逻辑此处执行 比如清楚定时器
    }
  }, [dispatch])

  return (
    <MsgContext.Provider value={msg}>
      <div>
        <div>
          <Button onClick={setProviderMsg}>修改Provider信息</Button>
          <InputComponent value={inputValue} onChange={inputChange} ref={InputComponentRef}></InputComponent>
          input:{inputValue}
        </div>
        <Button onClick={seInputComponentFocus}>InputComponent获得焦点</Button>

        <p><Button type="primary" onClick={toggle}>toggle</Button>{boolean ? "✔️" : "❎"}</p>

        <p>{count}</p>
        <div>
          <h2>ReduxTooltikReduxReact</h2>
          <Button type="primary" onClick={onIncrementBtnClick}>increment</Button>
          <Button onClick={onDecrementBtnClick}>decrement</Button>
          <Button type="text" onClick={onDecrementByAmountBtnClick}>decrementByAmount</Button>
          <Button onClick={onAsyncSetCountBtnClick}>asyncSetCount</Button>
        </div>
        {/* 缓存值时不会重新渲染
         */}
        <MemoCalcComponent pp={count}></MemoCalcComponent>
      </div>
    </MsgContext.Provider>
  )
}

export default MemoForwardRef
