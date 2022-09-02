import { createSlice } from '@reduxjs/toolkit'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    //토큰저장
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      cookies.set(accessToken, accessToken, { path: '/' })
    },
    //로그아웃(토큰삭제)
    logOut: (state, action) => {
      cookies.remove(accessToken)
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
