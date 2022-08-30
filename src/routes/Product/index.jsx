import React, { useState } from 'react'
import { useGetProductsQuery } from '../../api/productApiSlice'

function Product() {
  const { data: products, isLoading, isError } = useGetProductsQuery()
  const { loan, card } = products
  const [select, setSelect] = useState(loanProducts)

  const loanProducts = card.((product) => (
    <div key={product.product_id}>
      <p>{product.card_name}</p>
      <img src={product.card_img} width="112" />
    </div>
  ))

  const cardProducts = loan.map((product) => (
    <div key={product.loan_id}>
      <img src={product.bank_img} width="112" />
      <p>{product.loan_company}</p>
      <p>{product.loan_name}</p>
    </div>
  ))

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (error || !data) {
    return <div>오류발생!</div>
  }

  return <div>{/* <Card item={select} /> */}</div>
}

export default Product
