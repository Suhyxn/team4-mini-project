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
      // const { accessToken } = action.payload
      // cookies.set(ACCESSTOKEN, accessToken, { path: '/' })
      cookies.set(
        ACCESSTOKEN,
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0NUBoYW5tYWlsLm5ldCIsImlkIjoxNCwiZXhwIjoxNjYyMTIyMzg4LCJ1c2VybmFtZSI6IjEyMzQ1QGhhbm1haWwubmV0In0.oDWBk5yhmDk3jNWrRk3bSK5ncp9qOvdWUEiJe-_0_Bl_Ce30QiUVNJFbXYQ84oF6zTKPHWW7I8_SUTiBMTKDRQ',
        { path: '/' },
      )
    },
    //로그아웃(토큰삭제)
    logOut: (state, action) => {
      cookies.remove(ACCESSTOKEN)
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = cookies.get(ACCESSTOKEN)
