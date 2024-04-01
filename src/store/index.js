/* import { Redux } from 'react-redux'
import { counter } from './reducers/counter.js'


const store = Redux.createStore(counter)

// 每次 state 发生变化时执行回调
store.subscribe(function () {
  console.log('发生变化')
})

export default store

// 页面通过这种方式触发和获取
store.dispatch({ type: 'INCREMENT' })
store.getState()
*/

// 模块组合

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore.js'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export default store