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
  const { data: items, isLoading, isError } = useGetMypageQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !items) {
    return <div>오류발생!</div>
  }

  // const result = items.true.reduce((acc, cur) => {
  //   if (cur.productType) {
  //     return <Card item={cur} key={cur.cardId} />
  //   } else {
  //     return <Loan item={cur} key={cur.loanId} />
  //   }
  // }, [])

  // console.log(items.true.map((item) => {
  //   item.hasOwnProperty === '카드' ? <Card item={item} key={cur.cardId} /> : <Loan item={item} key={cur.loanId} />
  // })

  // const [logoutquery, { isLogooutLoading }] = useDoLogoutQuery()
  // // const { member, orders } = mypages

  // const logOutHandler = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const isLogout = await logoutquery()
  //     if (isLogooutLoading) {
  //       return <Loader />
  //     } else {
  //       isLogout && dispatch(logOut())
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const filterCardItems = items?.items.true.filter((item) => item.productType === '카드')
  // const filterLoanItems = items?.items.true.filter((item) => item.productType === '대출')
  // const filterLoanItems = items?.items.true.filter((item) => item.productType === '대출')

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
            item.hasOwnProperty === '카드' ? (
              <Card item={item} key={item.cardId} />
            ) : (
              <Loan item={item} key={item.loanId} />
            ),
          )}
        </div>
        {/* <div>
          {filterLoanItems.map((item) => (
            <Card item={item} key={item.cardId} />
          ))}
        </div>
        <S.subBox>신청 완료 상품</S.subBox>
        <div>
          {loans?.loanList?.map((item) => (
            <Loan item={item} key={item.loanId} />
          ))}
        </div> */}
        {/* <div>
          {cards?.cardList?.map((item) => (
            <Card item={item} key={item.cardId} />
          ))}
        </div> */}
      </S.ContentContainer>
      {/* <Button size="smaill" className="btn" onClick={logOutHandler}>
        로그아웃
      </Button> */}
    </>
  )
}

export default MyPage
