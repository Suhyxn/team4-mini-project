import React from 'react'
import { useGetProductsQuery } from '../../../store/slices/productApiSlice'
import Card from '../../common/Card'
import Loan from '../../common/Loan'

function BankTab() {
  const { data: products, isLoading, isError } = useGetProductsQuery()
  console.log(products)

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError || !products) {
    return <div>오류발생!</div>
  }

  return (
    <>
      {products.cardList.map((item) => (
        <Card item={item} key={item.cardId} />
      ))}
    </>
  )
}

export default BankTab
