import React from 'react'
import Button from '../../components/common/Button'
import * as S from './style'
import { useAddLoanToCartMutation } from '../../store/slices/cartApiSlice'
import Loader from '../../components/layout/Loader'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useGetLoanDetailQuery } from '../../store/slices/productApiSlice'

function LoanDetail() {
  const params = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isError } = useGetLoanDetailQuery(params.id)

  if (isLoading) {
    return <Loader />
  }

  if (isError || !data) {
    return <div>오류발생!</div>
  }

  // const data = {
  //   loanId: 1,
  //   productType: '대출',
  //   loanName: '신한대출',
  //   loanCompany: '신한',
  //   creditLine: '2000',
  //   rate: '2.8 10.2',
  //   primeRate: false,
  //   period: 3,
  //   loanLine: '50 90',
  //   tag: '주부 모바일 1금융권',
  //   img: 'https://www.banksalad.com/_next/image?url=https%3A%2F%2Fcdn.banksalad.com%2Fgraphic%2Fcolor%2Flogo%2Fcircle%2Fkyobo.png&w=96&q=75',
  // }

  // const [addLoanCart] = useAddLoanToCartMutation()

  const submitHandler = () => {
    addLoanCart({
      loanId: data.loanId,
    })
  }
  return (
    <>
      <S.Header>
        <AiOutlineArrowLeft size="30" onClick={() => navigate(-1)} />
      </S.Header>
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
          <div className="content">{data.creditLine} 만원</div>
        </S.Content>
      </S.ContentContainer>
      <S.Button>
        <Button size="large" onClick={submitHandler}>
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
          <div>
            {data.rate.split(' ')[0]}% ~ {data.rate.split(' ')[1]}
          </div>
          <div>없음</div>
          <div>200만원 ~ {data.creditLine} 만원</div>
          <div>1년 ~ {data.period}</div>
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
