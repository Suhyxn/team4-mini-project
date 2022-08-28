import React from 'react'
import { useGetProductsQuery } from '../../api/productApiSlice'

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
      {data.map((product) => (
        <div key={product.product_id}>
          <p>{product.card_name}</p>
          <img src={product.card_img} width="112" />
        </div>
      ))}
    </div>
  )
}

export default Home
