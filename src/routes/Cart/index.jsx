import React from 'react'
import { useGetCartQuery } from '../../store/slices/cartApiSlice'
import Card from '../../components/common/Card'

function Cart() {
  const { data: carts, isLoading, isError } = useGetCartQuery()
  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError || !carts) {
    return <div>오류발생!</div>
  }

  return (
    <div>
      {carts.card.map((item) => (
        <Card item={item} key={item.product_id} />
      ))}
    </div>
  )
}

export default Cart
