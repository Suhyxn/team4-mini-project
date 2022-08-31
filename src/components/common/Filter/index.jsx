import React, { useState } from 'react'
import * as S from './style'
import IfTab from '../../template/IfTab'

function Filter() {
  const [item, setItem] = useState({
    loan: true,
    card: false,
  })

  const filterHandler = (e) => {
    const { value } = e.target
    setItem({
      [value]: !item[value],
    })
  }

  return (
    <>
      <S.Container onClick={filterHandler}>
        <S.Input type="radio" name="filter" value="loan" id="filterloan" />
        <S.Label htmlFor="filterloan" active={item.loan}>
          대출
        </S.Label>
        <S.Input type="radio" name="filter" value="card" id="filtercard" />
        <S.Label htmlFor="filtercard" active={item.card}>
          카드
        </S.Label>
      </S.Container>
      <IfTab tab={item} />
    </>
  )
}

export default Filter
