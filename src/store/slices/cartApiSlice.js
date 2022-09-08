//장바구니 조회, 추가, 취소
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../apis/baseQuery'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getCardCarts: builder.query({
      query: () => 'carts/card',
    }),
    addCardToCart: builder.mutation({
      query: ({ data }) => {
        return {
          url: 'carts/card',
          method: 'POST',
          body: { card_id: data },
        }
      },
    }),
    deleteCardInCart: builder.mutation({
      query: (id) => ({
        url: `carts/card/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetCardCartsQuery,
  useAddCardToCartMutation,
  useDeleteCardInCartMutation,
} = cartApi
