import { Button } from 'antd';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const Input = forwardRef((Prop, ref) => {

  const inputRef = useRef(null)

  const focusHandler = () => {
    inputRef.current.focus()
  }
  // 指定 focusHandler 暴露给父组件调用 否则暴露了全部
  useImperativeHandle(ref, () => {
    console.dir(inputRef);
    console.dir(ref);
    return {
      focusHandler
    }
  })

  return <input type="text" ref={inputRef} />
})

function LearnUseInperativeHandle () {
  const sonRef = useRef(null)
  const focusHandler = () => {
    console.dir(sonRef);
    sonRef.current.focusHandler()
  }
  return (
    <div>
      <Input ref={sonRef}></Input>
      <Button onClick={focusHandler}>focus</Button>
    </div>
  )
}

export default LearnUseInperativeHandle
