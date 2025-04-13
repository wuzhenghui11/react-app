import { createSlice } from '@reduxjs/toolkit';
import { request } from '@/utils/request';
import { removeToken } from '@/utils';

const userStore = createSlice({
  name: 'userInfo',
  initialState: {
    token: localStorage.getItem('TOKEN') || ''
  },
  reducers: {
    setToken (state, action) {
      state.token = action.payload
    },
    clearUserInfo (state) {
      state.token = ''
      removeToken()
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

const { setToken, clearUserInfo } = userStore.actions

export {
  fetchLogin,
  clearUserInfo,
  setToken,
}

export default userStore.reducer
