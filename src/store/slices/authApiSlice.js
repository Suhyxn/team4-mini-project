//로그인, 로그아웃,  토큰 무효화 체크
const { VITE_BASE_URL } = import.meta.env
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../apis/baseQuery'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    //로그인하기
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
