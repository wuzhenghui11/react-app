import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useRef, createContext, useContext } from 'react';

const MsgContext = createContext()

function Duanluo (props) {
  console.dir(props);
  const [sonData, setSonData] = useState('sonData')
  
  return (
    <div style={{textAlign: 'left', backgroundColor: 'gray'}}>
      {props.text}{props.title}
      <input
        value={sonData}
        onChange={(e) => {setSonData(e.target.value)}}>
      </input>
      <button onClick={() => {props.onGetMsg(sonData)}}>给父组件的数据</button>
    </div>
  )
}

function DuanluoOther (props) {
  const msgContext = useContext(MsgContext)
  return (
    <div style={{ textAlign: 'left', backgroundColor: 'yellow' }}>
      这是一个子组件{props.title}
      {props.aboveData}{msgContext}
    </div>
  )
}

function Article () {
  const searchParams = useSearchParams()
  const [value, setValue] = useState('')
  const [msg, setMsg] = useState('')
  const inputRef = useRef(null)
  console.log(searchParams)

  const getInputDom = () => {
    console.dir(inputRef.current);
  }
  // 1.没有依赖项 初始和组件更新
  // 2.空数组 初始执行
  // 3.特定的依赖项 初始和特定的依赖项
  useEffect(() => {
    inputRef.current.focus()
    return () => {
      // 清除副作用逻辑
    }
  }, [])

  const sonMsg = (msg) => {
    console.log(msg);
    setMsg(msg)
  }
  return (
    <div>
      Article
      <input
       type='text'
       value={value}
       onChange={(e) => setValue(e.target.value)}
       ref={inputRef}>
      </input>
      <button onClick={getInputDom}>getInputDom</button>
      <p>{msg}</p>
      <MsgContext.Provider value={'1212'}>
        <Duanluo title={value} text="这是一个子组件" onGetMsg={sonMsg}></Duanluo>
        <DuanluoOther title={value} aboveData={msg}></DuanluoOther>
      </MsgContext.Provider>
    </div>
  )
}

export default Article
