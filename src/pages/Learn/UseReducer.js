import { Button } from 'antd';
import { useReducer } from 'react';

function LearnUseReducer () {

  function reducer (state, action) {
    switch (action.type) {
      case 'INC':
        return state + 1
      case 'DEC':
        return state - 1
      case 'SET':
        return action.payload
      default:
        return state
    }
  }

  const [state, dispath] = useReducer(reducer, 0)

  return (
    <div>
      <Button type="primary" onClick={() => {dispath({type: 'INC'})}}>INC</Button>
      {state}
      <Button type="primary" onClick={() => {dispath({type: 'DEC'})}}>DEC</Button>
      <Button type="primary" onClick={() => {dispath({type: 'SET', payload: 10})}}>SET</Button>
    </div>
  )
}

export default LearnUseReducer

