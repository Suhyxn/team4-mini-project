import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Card({ item }) {
  const {
    img: imageName,
    cardCompany: bank,
    cardName: name,
    annualFee: description,
    isfavorite: favorite,
    cardId: id,
    productType: type,
  } = item

  const navigate = useNavigate()

  return (
    <S.CardContainer onClick={() => navigate(`/card/${id}`)}>
      <S.CardBox>
        <S.CardImage src={imageName} />
      </S.CardBox>
      <S.CardInfo>
        <S.CardTitle>
          <S.CardBank>{bank}</S.CardBank>
          <S.CardName>{name}</S.CardName>
        </S.CardTitle>
        <S.CardDescription>연회비 {description} 원</S.CardDescription>
      </S.CardInfo>
      <S.CardFavorite>
        {favorite ? (
          <AiFillHeart size={25} />
        ) : (
          <AiOutlineHeart size={25} color="red" />
        )}
      </S.CardFavorite>
    </S.CardContainer>
  )
}

export default Card
