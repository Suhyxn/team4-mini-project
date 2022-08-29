const { VITE_SERVICE_KEY } = import.meta.env
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_SERVICE_KEY,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
