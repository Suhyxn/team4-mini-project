//상품 조회, 신청, 취소, 상품 디테
//추천상품 조회

//전체 상품 조회,
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const { VITE_BASE_URL } = import.meta.env
export const productsSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${VITE_BASE_URL}/products` }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '',
    }),

    getLoanDetail: builder.query({
      query: (id) => `/${id}?productType=대출`,
    }),
    getCardDetail: builder.query({
      query: (id) => `/${id}?productType=카드`,
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
 useGetLoanDetailQuery,
  useGetCardDetailQuery,
  useGetSearchDataQuery,
} = productsSlice
