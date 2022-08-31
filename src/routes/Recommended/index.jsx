import React, { useState } from 'react'
import { useGetRecommendQuery } from '../../store/slices/userApiSlice'
import * as S from './style'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'
import Filter from '../../components/common/Filter'
import BankTab from '../../components/template/BankTab'
import LoanTab from '../../components/template/LoanTab'

import CountdownTimer from './countdownTimer'

function Recommended() {
  const { data: recommends, isLoading, isError } = useGetRecommendQuery()

  const { value, setValue } = useState({
    bank: true,
    loan: false,
  })

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS

  const filterHandler = (e) => {
    const { name } = e.target
    console.log(value.name)
  }
  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError || !recommends) {
    return <div>오류발생!</div>
  }
  // const { userInfo, cardList, loanList } = recommends

  // console.log('recommends', recommends)

  return (
    <S.Container>
      <S.Title>
        <span>{recommends.cardList.length + recommends.loanList.length}</span>
        개의 대출 상품이
        <br />
        매칭되었습니다.
      </S.Title>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <div>유효시간 {Date.now() - Date.now()}</div>
      {recommends.userInfo}
      <Filter />
      <div>
        {recommends.loanList.map((item) => (
          <Loan item={item} key={item.loanId} />
        ))}
      </div>
      <div>
        {recommends.cardList.map((item) => (
          <Card item={item} key={item.cardId} />
        ))}
      </div>
    </S.Container>
  )
}

export default Recommended
