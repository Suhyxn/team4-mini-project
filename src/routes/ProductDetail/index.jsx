import React from 'react'

function ProductDetail() {
  const { data, error, isLoading } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }) => ({
      data: data.card,
      error,
      isLoading,
    }),
    pollingInterval: 3000,
  })
  return <div></div>
}

export default ProductDetail
