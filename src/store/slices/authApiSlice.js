//로그인, 로그아웃,  토큰 무효화 체크
const { VITE_BASE_URL } = import.meta.env
import { createApi } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_BASE_URL }),
  endpoints: (builder) => ({
    //로그인하기
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    doLogout: builder.query({
      query: () => 'do-logout',
    }),
    getIsduplicate: builder.query({
      query: (userName) => `duplicate?username=${userName}`,
    }),
  }),
})

export const { useLoginMutation, useDoLogoutQuery, useGetIsduplicateQuery } =
  authApi
