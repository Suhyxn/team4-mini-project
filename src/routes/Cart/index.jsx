import React, { useState } from 'react'
import { useGetCartQuery } from '../../store/slices/cartApiSlice'
import { useCreateOrderMutation } from '../../store/slices/orderApiSlice'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'
import Loader from '../../components/layout/Loader'
import Button from '../../components/common/Button'
import * as S from './style'

function Cart() {
  const { data: carts, isLoading, isError } = useGetCartQuery()
  const arr = []
  const [createOrder] = useCreateOrderMutation()
  const checkedHandler = (e, id) => {
    if (!e.target.parentNode.previousSibling.checked && !arr.includes(id)) {
      arr.push(id)
    }
  }

  const createOrderHandler = () => {
    createOrder(arr)
  }

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
          <S.TitleSpan>{carts.name}님</S.TitleSpan>의 장바구니
        </S.CartsTitle>
      </S.CartsTitleContainer>
      <div>
        <S.CardContainer>
          {carts.cardList.map((item) => (
            <S.Container key={item.cardId}>
              <S.CardCheckInput type="checkbox" id={`card-${item.cardId}`} />
              <S.CardLabel
                htmlFor={`card-${item.cardId}`}
                onClick={(e) => checkedHandler(e, `cardId: ${item.cardId}`)}
              >
                <S.CardCheckBox />
              </S.CardLabel>
              <Card item={item} />
            </S.Container>
          ))}
        </S.CardContainer>
        <S.CardContainer>
          {carts.loanList.map((item) => (
            <S.Container key={item.loanId}>
              <S.CardCheckInput type="checkbox" id={`loan-${item.loanId}`} />
              <S.CardLabel
                htmlFor={`loan-${item.loanId}`}
                onClick={(e) => checkedHandler(e, `loadId: ${item.loanId}`)}
              >
                <S.CardCheckBox />
              </S.CardLabel>
              <Loan item={item} />
            </S.Container>
          ))}
        </S.CardContainer>
      </div>
      <Button width="100%" height="5.2rem" onClick={createOrderHandler}>

        장바구니 신청
      </Button>
    </div>
  )
}

export default Cart
