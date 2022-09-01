//즐겨찾기(관심상품) 조회, 수정, 삭제
const { VITE_BASE_URL } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../apis/baseQuery'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery,
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => '/favorites',
    }),
    addCardFavorites: builder.mutation({
      query: ({ data }) => ({
        url: `/favorites/card`,
        metohd: 'POST',
        body: data,
      }),
    }),
    addLoanFavorites: builder.mutation({
      query: ({ data }) => ({
        url: `/favorites/loan`,
        metohd: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetFavoritesQuery,
  useAddLoanFavoritesMutation,
  useAddCardFavoritesMutation,
} = favoritesApi
