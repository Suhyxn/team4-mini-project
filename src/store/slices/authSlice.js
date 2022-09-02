import { createSlice } from '@reduxjs/toolkit'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

const AccessToken = 'accessToken'

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    //토큰저장
    setCredentials: (state, action) => {
      // const { accessToken } = action.payload
      // cookies.set(accessToken, accessToken, { path: '/' })
      cookies.set(
        AccessToken,
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0QGhhbm1haWwubmV0IiwiaWQiOjIsImV4cCI6MTY2MjEwNzc0OCwidXNlcm5hbWUiOiIxMjM0QGhhbm1haWwubmV0In0.qoRv24QxFd1ptLa1yD0VNVI6aAvvX1b5vatnpPFnoypD2sjfE4nkuAcw6Hw-ZL91dSUHqDiWMUh1yp_NzN1USg',
        { path: '/' },
      )
    },
    //로그아웃(토큰삭제)
    logOut: (state, action) => {
      cookies.remove(AccessToken)
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = cookies.get(AccessToken)
