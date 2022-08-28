//상품 조회, 신청, 취소
//추천상품 조회
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
  }),
})

export const { useGetProductsQuery } = productsSlice
