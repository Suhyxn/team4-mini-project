import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useGetMypageQuery } from '../../store/slices/userApiSlice'
import * as S from './style'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'
import Loader from '../../components/layout/Loader'
import { logOut } from '../../store/slices/authSlice'
import { useDispatch } from 'react-redux'
import { useDoLogoutQuery } from '../../store/slices/userApiSlice'

function MyPage() {
  const { data: items, isLoading, isError } = useGetMypageQuery()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  if (isLoading) {
    return <Loader />
  }

  if (isError || !items) {
    return <div>오류발생!</div>
  }

  const logOutHandler = async (e) => {
    e.preventDefault()
    dispatch(logOut())
    window.alert('로그아웃이 되었습니다')
    navigate('/product')
  }

  return (
    <>
      <S.Title>
        <span>{items.userInfo}님</span>의 정보입니다.
      </S.Title>
      <S.ContentContainer>
        <S.subBox>
          신청 중인 상품
          <Button size="smaill" className="btn">
            수정하기
          </Button>
        </S.subBox>
        <div>
          {items.true.map((item) =>
            item.productType === '카드' ? (
              <Card item={item} key={item.cardId} />
            ) : (
              <Loan item={item} key={item.loanId} />
            ),
          )}
        </div>
        <S.subBox>신청 완료 상품</S.subBox>
        <div>
          {items.false.map((item) =>
            item.productType === '카드' ? (
              <Card item={item} key={item.cardId} />
            ) : (
              <Loan item={item} key={item.loanId} />
            ),
          )}
        </div>
      </S.ContentContainer>
      <Button size="smaill" className="btn" onClick={logOutHandler}>
        로그아웃
      </Button>
    </>
  )
}

export default MyPage
