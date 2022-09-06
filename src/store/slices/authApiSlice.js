//로그인, 아이디 중복검사, 회원가입
const { VITE_BASE_URL } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  //토큰 필요 없음
  baseQuery: fetchBaseQuery({ baseUrl: `${VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    //로그인하기
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: '/login',
          method: 'POST',
          body: { ...credentials },
        }
      },
    }),
    //아이디 중복검사
    getIsduplicate: builder.query({
      query: (userName) => `/duplicate?username=${userName}`,
    }),
    //회원가입
    register: builder.mutation({
      query: (data) => {
        return {
          url: '/register',
          method: 'POST',
          body: data,
        }
      },
    }),
  }),
})

export const { useLoginMutation, useGetIsduplicateQuery, useRegisterMutation } =
  authApi
