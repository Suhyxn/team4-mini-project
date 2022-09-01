import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    //토큰저장
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      state.token = accessToken
    },
    //로그아웃(토큰삭제)
    logOut: (state, action) => {
      state.token = null
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
