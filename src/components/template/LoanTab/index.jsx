import React from 'react'
import * as S from './style'
import { useGetProductsQuery } from '../../../store/slices/productApiSlice'
import Loan from '../../common/Loan'

function LoanTab() {
  const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError || !products) {
    return <div>오류발생!</div>
  }
  return (
    <>
      {products.loanList.map((item) => (
        <Loan item={item} key={item.loanId} />
      ))}
    </>
  )
}

export default LoanTab
