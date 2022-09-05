import { createSlice } from '@reduxjs/toolkit'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

const ACCESSTOKEN = 'accessToken'

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    //토큰저장
    setCredentials: (state, action) => {
      console.log('동기적2', action.payload)
      // const { accessToken } = action.payload
      // state.token = accessToken
    },
    //로그아웃(토큰삭제)
    logOut: (state, action) => {
      // cookies.remove(ACCESSTOKEN)
      state.token = null
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token

// cookies.get(ACCESSTOKEN)
