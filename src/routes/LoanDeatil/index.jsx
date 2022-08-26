import React from 'react'
import Header from '../../components/layout/Header'
import Button from '../../components/common/Button'
import * as S from './style'
import { loan } from '../../constants/loan'

function LoanDetail() {
  return (
    <>
      <Header />
      <S.LoanImage src="/public/assets/images/loan.png" alt="loan" />
      <S.LoanTitle>{loan.title}</S.LoanTitle>
      <S.LoanSubTitle>{loan.subtitle}</S.LoanSubTitle>
      <S.ContentContainer>
        <S.Content>
          <div className="title">내 금리</div>
          <div className="content">{loan.interestrate}%</div>
        </S.Content>
        <S.Content>
          <div className="title">내 한도</div>
          <div className="content">{loan.limit}만원</div>
        </S.Content>
      </S.ContentContainer>
      <S.Button>
        <Button size="large" className="btn">
          신청하기
        </Button>
      </S.Button>
      <S.ExplanationTitle>상품설명</S.ExplanationTitle>
      <S.Explanation>
        <div className="title">
          <div className="first">대출 금리</div>
          <div>우대 금리</div>
          <div>대출 한도</div>
          <div>대출 기간</div>
          <div>금리 유형</div>
          <div>대출상환방법</div>
          <div>신청 방식</div>
          <div>연체 금리</div>
          <div>이자부과시기</div>
        </div>
        <div className="content">
          <div>10.4%~19.9%</div>
          <div>없음</div>
          <div>200만원 ~ 5,000만원</div>
          <div>1년 ~ 5년</div>
          <div>고정 금리</div>
          <div>원리금균등분할상환</div>
          <div>모바일 앱, TM센터</div>
          <div>약정이자율 + 최대 3%</div>
          <div>매월 후취</div>
        </div>
      </S.Explanation>
    </>
  )
}

export default LoanDetail
