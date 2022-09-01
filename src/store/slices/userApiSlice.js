//회원가입,  회원 탈퇴
//사용자 기본(추가) 정보 조회, 수정
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const { VITE_BASE_URL } = import.meta.env
import { baseQuery } from '../apis/baseQuery'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (builder) => ({
    //로그아웃
    doLogout: builder.query({
      query: () => '/do-logout',
    }),
    //마이페이지
    getMypage: builder.query({
      query: () => '/members/my-page',
    }),
    //회원정보 가져오기
    getUser: builder.query({
      query: () => `/members/edit`,
    }),
    //회원정보 수정
    putUser: builder.mutation({
      query: (data) => ({
        url: `/members/edit`,
        method: 'PUT',
        body: data,
      }),
    }),
    getRecommend: builder.query({
      query: () => '/members/recommendation',
    }),
  }),
})

export const {
  useGetMypageQuery,
  useDoLogoutQuery,
  useGetRecommendQuery,
  useGetUserQuery,
  usePutUserMutation,
} = userApi
