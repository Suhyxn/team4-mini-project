import React from 'react'
import * as S from './style'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineShopping } from 'react-icons/ai'
import { BiStoreAlt, BiHomeHeart } from 'react-icons/bi'
import { RiOilLine } from 'react-icons/ri'
import Button from '../../components/common/Button'
import { useAddCardToCartMutation } from '../../store/slices/cartApiSlice'
import { useGetProductsQuery } from '../../store/slices/productApiSlice'
import Loader from '../../components/layout/Loader'
import { useGetCardDetailQuery } from '../../store/slices/productApiSlice'

function ProductDetail() {
  const params = useParams()
  const navigate = useNavigate()
  const [addCardToCart] = useAddCardToCartMutation()

  const { data, isLoading, isError } = useGetCardDetailQuery(params.id)

  const submitHandler = () => {
    addCardToCart({
      card_id: data.cardId,
    })
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError || !data) {
    return <div>오류발생!</div>
  }

  return (
    <>
      <S.Header>
        <AiOutlineArrowLeft size="30" onClick={() => navigate(-1)} />
        <S.BankTitle>{data.cardCompany}</S.BankTitle>
      </S.Header>
      <S.Content>
        <S.CardImage src={data.img} alt="card" />
        <S.CardTitle>{data.cardName}</S.CardTitle>
        <S.CardSubTilte>{data.cardDescription}</S.CardSubTilte>
        <S.DescriptionContainer>
          <S.Description>
            <BiStoreAlt className="icons" />
            <div className="description">
              국내 모든 가맹점 <span>{data.franchisee}</span>
              적립
            </div>
          </S.Description>
          <S.Description>
            <AiOutlineShopping className="icons" />
            <div className="description">{data.shopping}</div>
          </S.Description>
          <S.Description>
            <RiOilLine className="icons" />
            <div className="description">주유 {data.oiling}</div>
          </S.Description>
          <S.Description>
            <BiHomeHeart className="icons" />
            <div className="description">
              관리비/4대보험 {data.insurance} 적립
            </div>
          </S.Description>
        </S.DescriptionContainer>
      </S.Content>
      <S.MenuContainer>
        <S.Input
          type="radio"
          name="filter"
          value="card"
          id="filterloan"
          checked="checked"
        />
        <S.Label Htmlfor="filterloan">연회비/브랜드</S.Label>
        <S.Input type="radio" name="filter" value="card" id="filtercard" />
        <S.Label Htmlfor="filtercard">주요혜택</S.Label>
        <S.Input type="radio" name="filter" value="card" id="role" />
        <S.Label Htmlfor="role">가입대상</S.Label>
      </S.MenuContainer>
      <S.SubTitle>
        연회비
        <S.SubContent>
          One Way(JCB) {data.annualFee} 원
          <br />
          VISA/mastercard {data.annualFee * 1.2} 원
          <br />
          국내전용 10,000원
        </S.SubContent>
      </S.SubTitle>
      <S.SubTitle>
        브랜드
        <S.SubContent>VISA/mastercard/국내전용/One Way(JCB)</S.SubContent>
      </S.SubTitle>
      <S.Button>
        <Button size="large" onClick={submitHandler}>
          장바구니 담기
        </Button>
      </S.Button>
    </>
  )
}

export default ProductDetail
