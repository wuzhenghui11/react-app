import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment (state) {
      state.value++
    },
    decrement (state) {
      state.value--
    },
    incrementByAmount (state, action) {
      state.value += action.payload
    },
    // 异步 action
    asyncIncrementByAmount (state, action) {
      state.value = action.payload
    }
  }
})
const { asyncIncrementByAmount } = counterStore.actions
// counterStore.actions.incrementByAmount(10) 返回 {type: 'counter/incrementByAmount', payload: 10}
console.log(counterStore.actions, counterStore.actions.incrementByAmount(10))

/* const newState = counterStore.reducer(
  { value: 10 },
  counterStore.actions.increment()
)
console.log(newState) */
// {value: 11}


export const { increment, decrement, incrementByAmount } = counterStore.actions

export const asyncSetCount = (num = 10) => {
  return async (dispatch) => {
    const res = await Promise.resolve(num)
    dispatch(asyncIncrementByAmount(res))
  }
}

export default counterStore.reducer

