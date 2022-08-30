import React, { useState } from 'react'
import * as S from './style'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Card({ item }) {
  const {
    card_img: imageName,
    card_company: bank,
    card_name: name,
    annual_fee: description,
    isfavorite: favorite,
  } = item

  return (
    <S.CardContainer>
      <S.CardBox>
        <S.CardImage src={imageName} />
      </S.CardBox>
      <S.CardInfo>
        <S.CardTitle>
          <S.CardBank>{bank}</S.CardBank>
          <S.CardName>{name}</S.CardName>
        </S.CardTitle>
        <S.CardDescription>
          연회비 {description.toLocaleString('ko-KR')} 원
        </S.CardDescription>
      </S.CardInfo>
      <S.CardFavorite>
        {item.isfavorite ? (
          <AiFillHeart size={25} />
        ) : (
          <AiOutlineHeart size={25} color="red" />
        )}
      </S.CardFavorite>
    </S.CardContainer>
  )
}

export default Card
