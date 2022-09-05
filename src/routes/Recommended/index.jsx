import React from 'react'
import { useGetRecommendQuery } from '../../store/slices/userApiSlice'
import * as S from './style'
import useFilter from '../../components/Hook/useFilter'
import IfTab from '../../components/template/IfTab'
import Filter from '../../components/common/Filter'
import CountdownTimer from './Timer/countdownTimer'
import Loader from '../../components/layout/Loader'

function Recommended() {
  const [isActive, setIsActive] = useFilter()
  const { data: recommends, isLoading, isError } = useGetRecommendQuery()

  const ONE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()
  const dateTimeAfterOneDays = NOW_IN_MS + ONE_DAYS_IN_MS

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  if (isError || !recommends) {
    return <div>오류발생!</div>
  }

  const userInfo = recommends.userInfo.split(' ')
  return (
    <>
      <S.Title>
        <p>
          <span>{recommends.cardList.length + recommends.loanList.length}</span>
          개의 대출 상품이
        </p>
        <p>매칭되었습니다.</p>
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

      <Filter onFilterHandler={setIsActive} item={isActive} />
      <IfTab tab={isActive} items={recommends} />
    </>
  )
}

export default Recommended
