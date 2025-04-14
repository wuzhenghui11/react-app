import { useState, memo, useCallback } from 'react'

// 组件在多次渲染的时候缓存函数

const Input = memo(function Input ({ onChange }) {
  console.log('子组件被重新渲染了')
  return (<input type="text" onChange={(e) => onChange(e.target.value)} />)
})

function LearnCallback () {
  // 用useCallback 子组件不会被重新渲染 函数也是一个引用类型
  const changeHandler = useCallback((value) => {
    console.log(value)
  }, [])
  const [count, setCount] = useState(0)
  return (
    <div>
      <Input onChange={changeHandler}></Input>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
    </div>
  )
}

export default LearnCallback
