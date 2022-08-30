import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: VITE_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})
