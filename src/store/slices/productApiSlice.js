//상품 조회, 신청, 취소, 상품 디테
//추천상품 조회

//전체 상품 조회,
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const { VITE_BASE_URL } = import.meta.env
export const productsSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getLoanDetail: builder.query({
      // query: (loan_id) => `/loan_detail/${loan_id}`,
      query: () => '/loans',
    }),
    getCardDetail: builder.query({
      // query: (card_id) => `/card_detail/${card_id}`,
      query: () => `/cards`,
    }),
    getSearch: builder.query({
      query: (productType, searchKeyword) => {
        return {
          url: '/products/search',
          params: { productType, searchKeyword },
        }
      },
      // 혹시나 배열에서 빼내야 한다면?!!
      // transformResponse: (responseData) => {
      //   return responseData[0]
      // },
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetLoanDetailQuery,
  useGetCardDetailQuery,
} = productsSlice
