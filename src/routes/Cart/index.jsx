import React from 'react'
import { useGetCartQuery } from '../../store/slices/cartApiSlice'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'
import Loader from '../../components/layout/Loader'
import Button from '../../components/common/Button'
import * as S from './style'

function Cart() {
  const { data: carts, isLoading, isError } = useGetCartQuery()
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  if (isError || !carts) {
    return <div>오류발생!</div>
  }

  return (
    <div>
      <S.CartsTitleContainer>
        <S.CartsTitle>
          <S.TitleSpan>000님</S.TitleSpan>의 장바구니
        </S.CartsTitle>
      </S.CartsTitleContainer>
      <div>
        <div>
          {carts.card.map((item) => (
            <Card item={item} key={item.product_id} />
          ))}
        </div>

        <div>
          {carts.loan.map((item) => (
            <Loan item={item} key={item.loan_id} />
          ))}
        </div>
      </div>
      <Button width="100%" height="5.2rem" disabled>
        장바구니 신청
      </Button>
    </div>
  )
}

export default Cart
