//즐겨찾기(관심상품) 조회, 수정, 삭제
const { VITE_BASE_URL } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${VITE_BASE_URL}/favorites` }),
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => '',
    }),
    addCardToFavorites: builder.mutation({
      query: ({ data }) => ({
        url: 'card',
        method: 'POST',
        body: data,
      }),
    }),
    addLoanToFavorites: builder.mutation({
      query: ({ data }) => ({
        url: 'loan',
        method: 'POST',
        body: data,
      }),
    }),
    deleteCardInFavorite: builder.mutation({
      query: (id) => ({
        url: `card/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteLoanInFavorite: builder.mutation({
      query: (id) => ({
        url: `loan/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetFavoritesQuery,
  useAddCardToFavoritesMutation,
  useAddLoanToFavoritesMutation,
  useDeleteCardInFavoriteMutation,
  useDeleteLoanInFavoriteMutation,
} = favoritesApi
