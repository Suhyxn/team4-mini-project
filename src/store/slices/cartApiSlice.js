//장바구니 조회, 추가, 취소
const { VITE_BASE_URL } = import.meta.env
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../apis/baseQuery'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getCart: builder.query({
      query: () => '/carts',
    }),
    addCardToCart: builder.mutation({
      query: ({ data }) => ({
        url: '/carts/card',
        method: 'POST',
        body: data,
      }),
    }),
    addLoanToCart: builder.mutation({
      query: ({ data }) => ({
        url: '/carts/loan',
        method: 'POST',
        body: data,
      }),
    }),
    deleteCardInCart: builder.mutation({
      query: (id) => ({
        url: `/carts/card/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteLoanInCart: builder.mutation({
      query: (id) => ({
        url: `/carts/loan/${id}`,
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
