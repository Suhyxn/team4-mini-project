import React from 'react'
import * as S from './style'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Loan({ item }) {
  const {
    bank_img: imageURL,
    loan_company: bank,
    loan_name: name,
    loan_rate: rates,
    isfavorite: favorite,
  } = item

  //지울 부분
  const tags = ['중도상환수수료 없음', '무서류', '모바일', '직장인', '2금융권']

  return (
    <>
      <S.Container>
        <S.Box>
          <S.StyledImg src={imageURL} />
          <S.InfoBox>
            <S.Title>{bank}</S.Title>
            <S.SubTitle>{name}</S.SubTitle>
            <S.Rate>
              {rates[0]}~{rates[1]}%
            </S.Rate>
            <S.TagBox>
              {tags.map((tag, index) => (
                <S.Tag index={index}>{tag}</S.Tag>
              ))}
            </S.TagBox>
          </S.InfoBox>
        </S.Box>
        <S.CardFavorite>
          {favorite ? (
            <AiFillHeart size={25} />
          ) : (
            <AiOutlineHeart size={25} color="red" />
          )}
        </S.CardFavorite>
      </S.Container>
    </>
  )
}

export default Loan
