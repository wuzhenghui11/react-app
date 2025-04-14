import { increment1, decrement1, setNumber, featchList } from '@/store/modules/learnRduxReact';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function LearnReduxTooltikReduxReact () {
  const { count, list } = useSelector((state) => {
    /* 
     {
      cc: {
        count: 0
      }
    }
    */
    console.dir(state)
    return state.cc
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(featchList())
  }, [dispatch])

  return (
    <div>
      <button onClick={() => dispatch(increment1())}>increment</button>
      {count}
      <button onClick={() => dispatch(decrement1())}>increment</button>
      <button onClick={() => dispatch(setNumber(10))}>10</button>
      <button onClick={() => dispatch(featchList())}>async</button>
      { list.map((item) =><span key={item}>{ item }-</span>) }
    </div>
  )
}

export default LearnReduxTooltikReduxReact
