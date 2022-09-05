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
    deleteOrder: builder.mutation({
      query: ({ id }) => ({
        url: `orders/${id}`,
        metohd: 'DELETE',
      }),
    }),
  }),
})

export const { useCreateOrderMutation } = orderApi
