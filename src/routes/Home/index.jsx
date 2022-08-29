import React from 'react'
import { Outlet } from 'react-router-dom'
import { useGetProductsQuery } from '../../store/slices/productApiSlice'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'

function Home() {
  const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError || !products) {
    return <div>오류발생!</div>
  }

  return (
    <>
      <div>
        {products.card.map((item) => (
          <Card item={item} key={item.product_id} />
        ))}
      </div>
      <div>
        {products.loan.map((item) => (
          <Loan item={item} key={item.loan_id} />
        ))}
      </div>
      <Outlet />
    </>
  )
}

export default Home
