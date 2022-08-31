//장바구니 조회, 추가, 취소
const { VITE_BASE_URL } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${VITE_BASE_URL}/carts` }),
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getCart: builder.query({
      query: () => '',
    }),
    addCardToCart: builder.mutation({
      query: ({ data }) => ({
        url: '/card',
        method: 'POST',
        body: data,
      }),
    }),
    addLoanToCart: builder.mutation({
      query: ({ data }) => ({
        url: '/loan',
        method: 'POST',
        body: data,
      }),
    }),
    deleteCardInCart: builder.query({
      query: (id) => ({
        url: `card/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteLoanInCart: builder.query({
      query: (id) => ({
        url: `loan/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetCartQuery,
  useAddCardToCartMutation,
  useAddLoanToCartMutation,
  useDeleteCardInCartQuery,
  useDeleteLoanInCartQuery,
} = cartApi
