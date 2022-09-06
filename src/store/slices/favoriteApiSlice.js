//즐겨찾기(관심상품) 조회, 수정, 삭제
const { VITE_BASE_URL } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../apis/baseQuery'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery,
  endpoints: (builder) => ({
    getCardFavorites: builder.query({
      query: () => 'favorites/card',
    }),
    getLoanFavorites: builder.query({
      query: () => 'favorites/loan',
    }),
    addCardToFavorites: builder.mutation({
      query: ({ data }) => ({
        url: 'favorites/card',
        method: 'POST',
        body: data,
      }),
    }),
    addLoanToFavorites: builder.mutation({
      query: ({ data }) => ({
        url: 'favorites/loan',
        method: 'POST',
        body: data,
      }),
    }),
    deleteCardInFavorite: builder.mutation({
      query: (id) => ({
        url: `favorites/card/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteLoanInFavorite: builder.mutation({
      query: (id) => ({
        url: `favorites/loan/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetCardFavoritesQuery,
  useGetLoanFavoritesQuery,
  useAddCardToFavoritesMutation,
  useAddLoanToFavoritesMutation,
  useDeleteCardInFavoriteMutation,
  useDeleteLoanInFavoriteMutation,
} = favoritesApi
