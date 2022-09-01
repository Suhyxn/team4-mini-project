//상품 신청
const { VITE_BASE_URL } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
  reducerPath: 'orderSlice',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_BASE_URL }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: ({ data }) => ({
        url: 'orders',
        metohd: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useCreateOrderMutation } = orderApi
