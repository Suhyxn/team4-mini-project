import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Loan({ item }) {
  const {
    bank_img: imageURL,
    loan_company: bank,
    loan_name: name,
    loan_rate: rates,
    isfavorite: favorite,
    product_id: id,
  } = item

  const navigate = useNavigate()

  //지울 부분
  const tags = ['중도상환수수료 없음', '무서류', '모바일', '직장인', '2금융권']

  return (
    <>
      <S.Container onClick={() => navigate(`/loan/${id}`)}>
        <S.imgBox>
          <S.StyledImg src={imageURL} />
        </S.imgBox>
        <S.InfoBox>
          <S.Title>{bank}</S.Title>
          <S.SubTitle>{name}</S.SubTitle>
          <S.Rate>
            {rates[0]}~{rates[1]}%
          </S.Rate>
          <S.TagBox>
            {tags.map((tag, index) => (
              <S.Tag index={index} key={index}>
                {tag}
              </S.Tag>
            ))}
          </S.TagBox>
        </S.InfoBox>
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
