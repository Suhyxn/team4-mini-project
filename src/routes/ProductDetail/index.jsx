import React from 'react'
import * as S from './style'
import { card1 } from '../../constants/card'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function ProductDetail() {
  return (
    <>
      <AiOutlineArrowLeft />
      <div>{card1.bank}</div>
      <div>{card1.image}</div>
      <div>{card1.title}</div>
      <div>{card1.subtitle}</div>
      <div>{card1.description1}</div>
      <div>{card1.description2}</div>
      <div>{card1.description3}</div>
      <div>{card1.description4}</div>
      <S.Container>
        <S.Input type="radio" name="filter" value="card" id="filterloan" />
        <S.Label for="filterloan">연회비/브랜드</S.Label>
        <S.Input type="radio" name="filter" value="card" id="filtercard" />
        <S.Label for="filtercard">주요혜택</S.Label>
        <S.Input type="radio" name="filter" value="card" id="role" />
        <S.Label for="role">가입대상</S.Label>
      </S.Container>
    </>
  )
}

export default ProductDetail
