import React from 'react'
import { Outlet } from 'react-router-dom'
import { useGetProductsQuery } from '../../api/productApiSlice'
import Card from '../../components/common/Card'

function Home() {
  const { data: products, isLoading, isError } = useGetProductsQuery()
  // const { data, error, isLoading } = useGetProductsQuery(undefined, {
  //   selectFromResult: ({ data, error, isLoading }) => ({
  //     data: data?.card,
  //     error,
  //     isLoading,
  //   }),
  //   pollingInterval: 3000,
  // })

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError || !products) {
    return <div>오류발생!</div>
  }

  return (
    <div>
      {products.card.map((item) => (
        <Card item={item} />
      ))}
      <Outlet />
    </div>
  )
}

export default Home
