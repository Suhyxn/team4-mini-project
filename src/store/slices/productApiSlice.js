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
    // getLoanDetail: builder.query({
    //   // query: (loan_id) => `/loan_detail/${loan_id}`,
    //   query: () => '/loan_detail',
    // }),
    // getCardDetail: builder.query({
    //   // query: (card_id) => `/card_detail/${card_id}`,
    //   query: () => `/card_detail`,
    // }),
    getSearchData: builder.query({
      query: (data) => {
        const { productType, searchKeyword } = data
        return {
          url: `/products/search?productType=${productType}&searchKeyword=${searchKeyword}`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const {
  useGetProductsQuery,
  // useGetLoanDetailQuery,
  // useGetCardDetailQuery,
  useGetSearchDataQuery,
} = productsSlice
