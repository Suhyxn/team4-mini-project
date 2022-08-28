import React from 'react'
import * as S from './style'

function Filter() {
  return (
    <S.Container>
      <S.Input type="radio" name="filter" value="card" id="filterloan" />
      <S.Label for="filterloan">대출</S.Label>
      <S.Input type="radio" name="filter" value="card" id="filtercard" />
      <S.Label for="filtercard">카드</S.Label>
    </S.Container>
  )
}

export default Filter
