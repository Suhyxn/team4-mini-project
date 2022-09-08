import React, { useState } from 'react'
import { useGetCardCartsQuery } from '../../store/slices/cartApiSlice'
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
  } = useGetCardCartsQuery()

  const arr = []
  const [createOrder] = useCreateOrderMutation()
  const checkedHandler = (e, id) => {
    if (!e.target.parentNode.previousSibling.checked && !arr.includes(id)) {
      arr.push(id)
    }
  }

  const createOrderHandler = () => {
    //
  }

  if (cardLoding) {
    return <Loader />
  }

  if (cardError || !cards) {
    return <div>오류발생!</div>
  }

  return (
    <div>
      <S.Title>
        장바구니 속에 <span>{(cards?.cardList?.length ?? 0).toString()}개</span>
        의 상품이 있어요.
      </S.Title>

      <div>
        <S.CardContainer>
          {cards?.cardList?.map((item) => (
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
      {cards?.cardList?.length && (
        <Button width="100%" height="5.2rem" onClick={createOrderHandler}>
          신청하기
        </Button>
      )}
    </div>
  )
}

export default Cart
