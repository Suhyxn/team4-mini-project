import React, { useState } from 'react'
import { useGetRecommendQuery } from '../../store/slices/userApiSlice'
import * as S from './style'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'

import CountdownTimer from './Timer/countdownTimer'
function Recommended() {
  const { data: recommends, isLoading, isError } = useGetRecommendQuery()

  const ONE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()

  const dateTimeAfterOneDays = NOW_IN_MS + ONE_DAYS_IN_MS

  const [filter, setFilter] = useState('loan')

  const filterHandler = (e) => {
    setFilter(e.target.value)
  }
  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError || !recommends) {
    return <div>오류발생!</div>
  }

  const userInfo = recommends.userInfo.split(' ')
  return (
    <S.Container>
      <S.Title>
        <span>{recommends.cardList.length + recommends.loanList.length}</span>
        개의 대출 상품이
        <br />
        매칭되었습니다.
      </S.Title>

      <S.countDown>
        유효시간{<CountdownTimer targetDate={dateTimeAfterOneDays} />}
      </S.countDown>

      <S.CardContainer>
        <div>내 최저금리</div>
        <span>{userInfo[1]}%</span>
      </S.CardContainer>
      <S.CardContainer>
        <div>내 최대한도</div>
        <span>{userInfo[0]}만원</span>
      </S.CardContainer>
      <S.FilterContainer onClick={filterHandler}>
        <S.Input type="radio" name="filter" value="loan" id="filterloan" />
        <S.Label htmlFor="filterloan">대출</S.Label>
        <S.Input type="radio" name="filter" value="card" id="filtercard" />
        <S.Label htmlFor="filtercard">카드</S.Label>
      </S.FilterContainer>
      {filter === 'loan'
        ? recommends.loanList.map((item) => (
            <Loan item={item} key={item.loanId} />
          ))
        : recommends.cardList.map((item) => (
            <Card item={item} key={item.cardId} />
          ))}
    </S.Container>
  )
}

export default Recommended
