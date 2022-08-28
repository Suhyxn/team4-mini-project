//즐겨찾기(관심상품) 조회, 수정, 삭제
//즐겨찾기(관심상품) 조회, 수정, 삭제
const { VITE_SERVICE_KEY } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_SERVICE_KEY,
  }),
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => 'favorites',
    }),
  }),
})

export const { useGetFavoritesQuery } = favoritesApi
