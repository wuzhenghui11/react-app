import { createSlice } from '@reduxjs/toolkit';
import { request } from '@/utils/request';

const userStore = createSlice({
  name: 'userInfo',
  initialState: {
    token: localStorage.getItem('TOKEN') || ''
  },
  reducers: {
    setToken (state, action) {
      state.token = action.payload
    }
  }
})

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/api/getData2', loginForm)
    console.log(res);
    dispatch(setToken(res.data.token))
    localStorage.setItem('TOKEN', res.data.token)
  }
}

const { setToken } = userStore.actions

export {
  fetchLogin,
  setToken
}

export default userStore.reducer
