//회원가입,  회원 탈퇴
//사용자 기본(추가) 정보 조회, 수정
const { VITE_BASE_URL } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../apis/baseQuery'

export const myPageApi = createApi({
  reducerPath: 'myPageApi',
  baseQuery,
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getCart: builder.query({
      query: () => 'mypage',
    }),
  }),
})

export const { useGetCartQuery } = myPageApi
