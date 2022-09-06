import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const { VITE_BASE_URL } = import.meta.env
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
//쿼리요청에서 토큰이 필요한 경우
export const baseQuery = fetchBaseQuery({
  baseUrl: `${VITE_BASE_URL}`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = cookies.get('accessToken')
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})
