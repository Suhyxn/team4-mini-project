//회원가입,  회원 탈퇴
//사용자 기본(추가) 정보 조회, 수정
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const { VITE_BASE_URL } = import.meta.env
import { baseQuery } from '../apis/baseQuery'

export const userApi = createApi({
  reducerPath: 'userApi',
  //토큰있을때 삭제
  baseQuery: fetchBaseQuery({ baseUrl: VITE_BASE_URL }),
  //토큰있을때 주석 풀기
  // baseQuery,
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getMypage: builder.query({
      query: () => '/mypage',
    }),
    getRecommend: builder.query({
      query: () => '/recommended',
    }),
  }),
})

export const { useGetMypageQuery, useGetRecommendQuery } = userApi
