import React from 'react'
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
  const { data: mypages, isLoading, isError } = useGetMypageQuery()
  const dispatch = useDispatch()
  if (isLoading) {
    return <Loader />
  }

  if (isError || !mypages) {
    return <div>오류발생!</div>
  }
  const [logoutquery, { isLogooutLoading }] = useDoLogoutQuery()
  const { member, orders } = mypages

  const logOutHandler = async (e) => {
    e.preventDefault()
    try {
      const isLogout = await logoutquery()
      if (isLogooutLoading) {
        return <Loader />
      } else {
        isLogout && dispatch(logOut())
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <S.Title>
        <span>{member.name}님</span>의 정보입니다.
      </S.Title>
      <S.ContentContainer>
        <S.subBox>
          신청 중인 상품
          <Button size="smaill" className="btn">
            수정하기
          </Button>
        </S.subBox>
        <div>
          {orders.loanList.map((item) => (
            <Loan item={item} key={item.loanId} />
          ))}
        </div>
        <div>
          {orders.cardList.map((item) => (
            <Card item={item} key={item.cardId} />
          ))}
        </div>
        <S.subBox>신청 완료 상품</S.subBox>
        <div>
          {orders.loanList.map((item) => (
            <Loan item={item} key={item.loanId} />
          ))}
        </div>
        <div>
          {orders.cardList.map((item) => (
            <Card item={item} key={item.cardId} />
          ))}
        </div>
      </S.ContentContainer>
      <Button size="smaill" className="btn" onClick={logOutHandler}>
        로그아웃
      </Button>
    </>
  )
}

export default MyPage
