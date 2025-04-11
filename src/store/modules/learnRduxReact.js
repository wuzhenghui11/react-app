import { createSlice } from '@reduxjs/toolkit';
import { increment } from './counterStore';

const learnSlice = createSlice({
  name: 'cc',
  initialState: {
    count: 0,
    list: []
  },
  reducers: {
    increment1 (state) {
      state.count++
    },
    decrement1 (state) {
      state.count--
    },
    setNumber (state, action) {
      /* 
        action: {
          payload: 10,
          type: "cc/setNumber"
        }
      */
      console.dir(action)
      state.count = action.payload
    },
    setFeatchlist (state, action) {
      state.list = action.payload
    }
  }
})

console.dir(learnSlice);

export const { increment1, decrement1, setNumber, setFeatchlist/*异步请求部分*/ } = learnSlice.actions

// 异步 方法 里返回异步操作
export const featchList = () => {
  return  async (dispatch) => {
    const array = await [1, 2]
    dispatch(setFeatchlist(array))
  }
}

const reducer = learnSlice.reducer

export default reducer
