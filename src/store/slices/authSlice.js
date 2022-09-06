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
      const { accessToken } = action.payload
      state.token = accessToken
      cookies.set(ACCESSTOKEN, accessToken.slice(7))
    },
    //로그아웃(토큰삭제)
    logOut: (state, action) => {
      cookies.remove(ACCESSTOKEN)
      state.token = null
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = cookies.get(ACCESSTOKEN)
