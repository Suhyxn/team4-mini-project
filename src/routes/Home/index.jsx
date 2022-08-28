import React from 'react'
import { useGetProductsQuery } from '../../api/productApiSlice'

import { Outlet } from 'react-router-dom'
import Card from '../../components/common/Card'

function Home() {
  // const { data: products, loading, isError } = useGetProductsQuery()
  const { data, error, isLoading } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }) => ({
      data: data?.card,
      error,
      isLoading,
    }),
    pollingInterval: 3000,
  })

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (error || !data) {
    return <div>오류발생!</div>
  }

  return (
    <div>
      <Card
        imageName="kookmin"
        bank="신한카드"
        name="신한 deep dream"
        description="1900"
        tags={['신한']}
      />
      <Outlet />
    </div>
  )
}

export default Home
