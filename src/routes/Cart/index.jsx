import React, { useState } from 'react'
<<<<<<< HEAD
import {
  useGetCardCartsQuery,
  useGetLoanCartsQuery,
} from '../../store/slices/cartApiSlice'
=======
import { useGetCardCartQuery } from '../../store/slices/cartApiSlice'
>>>>>>> 4b3476cd6300a3ddc1deb0e29bdc5c7805049ef6
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
<<<<<<< HEAD
  } = useGetCardCartsQuery()
  const {
    data: loans,
    isLoading: loanLoding,
    isError: loanError,
  } = useGetLoanCartsQuery()
=======
  } = useGetCardCartQuery()

>>>>>>> 4b3476cd6300a3ddc1deb0e29bdc5c7805049ef6
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

  if (cardLoding || loanLoding) {
    return <Loader />
  }

  if (cardError || loanError || !cards || !loans) {
    return <div>오류발생!</div>
  }

  return (
    <div>
      <S.Title>
        장바구니 속에{' '}
        <span>
          {(cards?.cardList?.length ?? 0) + (loans?.loanList?.length ?? 0)}개
        </span>
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
        <S.CardContainer>
          {loans?.loanList?.map((item) => (
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
