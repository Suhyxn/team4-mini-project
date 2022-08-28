import React, { useState } from 'react'
import * as S from './style'
import {
  AiOutlineBorder,
  AiOutlineCheckSquare,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai'

function Card({
  imageName,
  name,
  bank,
  checked,
  favorite,
  description,
  theTags,
}) {
  const [tags, setTags] = useState(theTags)
  return (
    <S.CardContainer>
      <S.CardCheckBox>
        {checked ? (
          <AiOutlineCheckSquare size={25} />
        ) : (
          <AiOutlineBorder size={25} />
        )}
      </S.CardCheckBox>
      <S.CardImage imageName={imageName} />
      <S.CardBank>{bank}</S.CardBank>
      <S.CardName>{name}</S.CardName>
      <S.CardDescription>연회비 {description} 원</S.CardDescription>
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
