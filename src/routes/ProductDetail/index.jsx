import React from 'react'
import * as S from './style'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineShopping } from 'react-icons/ai'
import { BiStoreAlt, BiHomeHeart } from 'react-icons/bi'
import { RiOilLine } from 'react-icons/ri'
import Button from '../../components/common/Button'
import { useAddCardToCartMutation } from '../../store/slices/cartApiSlice'
import { useGetProductsQuery } from '../../store/slices/productApiSlice'
import DetailTab from '../../components/common/DetailTab'
import Loader from '../../components/layout/Loader'
import { useGetCardDetailQuery } from '../../store/slices/productApiSlice'

function ProductDetail() {
  const params = useParams()
  const navigate = useNavigate()
  const [addCardToCart] = useAddCardToCartMutation()

  const { data, isLoading, isError } = useGetCardDetailQuery(params.id)

  const submitHandler = () => {
    try {
      addCardToCart({
        data: data.cardId,
      })
      alert('장바구니에 상품이 담겼습니다.')
    } catch (error) {
      alert(error)
    }
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
            <div className="description">
              <span>{data.shopping}</span>
            </div>
          </S.Description>
          <S.Description>
            <RiOilLine className="icons" />
            <div className="description">
              주유 <span>{data.oiling}</span>
            </div>
          </S.Description>
          <S.Description>
            <BiHomeHeart className="icons" />
            <div className="description">
              관리비/4대보험 <span>{data.insurance}</span> 적립
            </div>
          </S.Description>
        </S.DescriptionContainer>
      </S.Content>
      <DetailTab data={data} />

      <Button size="large" onClick={submitHandler}>
        장바구니 담기
      </Button>
    </>
  )
}

export default ProductDetail
