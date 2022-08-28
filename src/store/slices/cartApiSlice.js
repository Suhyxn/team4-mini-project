//장바구니 조회, 추가, 취소
const { VITE_BASE_URL } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_BASE_URL }),
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => 'carts',
    }),
  }),
})

export const { useGetCartQuery } = cartApi
