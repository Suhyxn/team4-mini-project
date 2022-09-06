import React, { useState } from 'react'
import { useGetCardCartQuery } from '../../store/slices/cartApiSlice'
import { useCreateOrderMutation } from '../../store/slices/orderApiSlice'
import Card from '../../components/common/Card'
import Loader from '../../components/layout/Loader'
import Button from '../../components/common/Button'
import * as S from './style'

function Cart() {
  const {
    data: cards,
    isLoading: cardLoding,
    isError: cardError,
  } = useGetCardCartQuery()

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

  if (cardLoding) {
    return <Loader />
  }

  if (cardError || !cards) {
    return <div>오류발생!</div>
  }

  return (
    <div>
      <S.Title>{/* <span>{carts.name}님</span>의 장바구니 */}</S.Title>

      <div>
        <S.CardContainer>
          {cards.cardList?.map((item) => (
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
      </div>
      <Button width="100%" height="5.2rem" onClick={createOrderHandler}>
        장바구니 신청
      </Button>
    </div>
  )
}

export default Cart
