import React from 'react'
import Button from '../../components/common/Button'
import * as S from './style'

function LoanDetail() {
  const data = {
    loanId: 1,
    productType: '대출',
    loanName: '신한대출',
    loanCompany: '신한',
    creditLine: '2000',
    rate: '2.8 10.2',
    primeRate: false,
    period: 3,
    loanLine: '50 90',
    tag: '주부 모바일 1금융권',
    img: 'https://www.banksalad.com/_next/image?url=https%3A%2F%2Fcdn.banksalad.com%2Fgraphic%2Fcolor%2Flogo%2Fcircle%2Fkyobo.png&w=96&q=75',
  }

  return (
    <>
      <S.LoanImage src={data.img} alt="loan" />
      <S.LoanTitle>{data.loanCompany}</S.LoanTitle>
      <S.LoanSubTitle>{data.loanName}</S.LoanSubTitle>
      <S.ContentContainer>
        <S.Content>
          <div className="title">내 금리</div>
          <div className="content">{data.rate.split(' ')[0]}%</div>
        </S.Content>
        <S.Content>
          <div className="title">내 한도</div>
          <div className="content">
            {data.creditLine.toLocaleString('ko-KR')}만원
          </div>
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
