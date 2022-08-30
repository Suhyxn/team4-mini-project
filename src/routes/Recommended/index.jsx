import React from 'react'
import { useGetMypageQuery } from '../../store/slices/userApiSlice'
import * as S from './style'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'

function Recommended() {
  const { data: recommends, isLoading, isError } = useGetMypageQuery()

  const { userInfo, cardList, loanList } = recommends

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError || !recommends) {
    return <div>오류발생!</div>
  }

  return (
    <S.Container>
      <S.Title>
        <span>{cardList.length + loanList.length}</span>의 정보입니다.
      </S.Title>
      <S.ContentContainer>
        <span>신청 중인 상품</span>
        <Button size="smaill" className="btn">
          수정하기
        </Button>
        <div>
          {products.loan.map((item) => (
            <Loan item={item} key={item.loan_id} />
          ))}
        </div>
        <div>신청 완료 상품</div>
        <div>
          {products.card.map((item) => (
            <Card item={item} key={item.product_id} />
          ))}
        </div>
      </S.ContentContainer>
      <Button size="smaill" className="btn">
        로그아웃
      </Button>
    </S.Container>
  )
}

export default Recommended
