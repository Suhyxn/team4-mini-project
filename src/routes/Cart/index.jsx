import React, { useState } from 'react'
import { useGetCartQuery } from '../../store/slices/cartApiSlice'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'
import Loader from '../../components/layout/Loader'
import Button from '../../components/common/Button'
import * as S from './style'
import { AiOutlineBorder, AiOutlineCheckSquare } from 'react-icons/ai'

function Cart() {
  const { data: carts, isLoading, isError } = useGetCartQuery()
  const [checked, setChecked] = useState(false)
  const arr = []
  const checkedHandler = (e, id) => {
    if (!e.target.parentNode.previousSibling.checked && !arr.includes(id)) {
      arr.push(id)
    }
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
          <S.TitleSpan>000님</S.TitleSpan>의 장바구니
        </S.CartsTitle>
      </S.CartsTitleContainer>
      <div>
        <S.CardContainer>
          {carts.card.map((item) => (
            <S.Container key={item.product_id}>
              <S.CardCheckInput type="checkbox" id={item.product_id} />
              <S.CardLabel
                htmlFor={item.product_id}
                onClick={(e) => checkedHandler(e, item.product_id)}
              >
                <S.CardCheckBox />
              </S.CardLabel>
              <Card item={item} />
            </S.Container>
          ))}
        </S.CardContainer>
        <S.CardContainer>
          {carts.loan.map((item) => (
            <S.Container key={item.product_id}>
              <S.CardCheckInput type="checkbox" id={item.product_id} />
              <S.CardLabel
                htmlFor={item.product_id}
                onClick={(e) => checkedHandler(e, item.product_id)}
              >
                <S.CardCheckBox />
              </S.CardLabel>
              <Loan item={item} />
            </S.Container>
          ))}
        </S.CardContainer>
      </div>
      <Button width="100%" height="5.2rem" disabled>
        장바구니 신청
      </Button>
    </div>
  )
}

export default Cart
