import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../../common/Button'
import * as S from './style'

function LoanInfo() {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Title>
        나에게 딱 맞는
        <br />
        신용상품을 찾아보세요
      </S.Title>
      <S.SubTitle>
        다양한 금융사의 신용 금리와 한도를
        <br />
        비교할 수 있어요
      </S.SubTitle>
      <Button size="large" width="80%" onClick={() => navigate('/login')}>
        내 조건으로 상품 찾기
      </Button>
    </S.Container>
  )
}

export default LoanInfo
