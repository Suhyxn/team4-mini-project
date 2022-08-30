import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineShopping } from 'react-icons/ai'
import { BiStoreAlt, BiHomeHeart } from 'react-icons/bi'
import { RiOilLine } from 'react-icons/ri'
import Button from '../../components/common/Button'

function ProductDetail() {
  const navigate = useNavigate()

  // let history = useHistory()

  // const { data, error, isLoading } = useGetProductsQuery(undefined, {
  //   selectFromResult: ({ data, error, isLoading }) => ({
  //     data: data.card,
  //     error,
  //     isLoading,
  //   }),
  //   pollingInterval: 3000,
  // })

  const data = {
    cardId: 1,
    productType: '카드',
    cardName: '신한카드',
    cardCompany: '신한',
    annualFee: '10000',
    cardType: '신용',
    cardDescription: '매일매일 할인 좋아',
    franchisee: '0.3 1.0',
    shopping: '10만원 당 5천 머니',
    oiling: '5만원 당 3천원',
    insurance: '7만원 당 2천 머니',
    cafe: '100',
    tag: '주부 그림/운동 30대',
    img: 'https://cdn.banksalad.com/entities/etc/1561359772723-1572.png',
  }

  console.log(data.franchisee.split(' '))

  return (
    <>
      <S.Header>
        <AiOutlineArrowLeft
          size="30"
          onClick={() => {
            history.goBack()
          }}
        />
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
              국내 모든 가맹점{' '}
              <span>
                {data.franchisee.split(' ')[0]}~{data.franchisee.split(' ')[1]}
              </span>
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
          One Way(JCB) {data.annualFee.toLocaleString('ko-KR')} 원
          <br />
          VISA/mastercard 12,000원
          <br />
          국내전용 10,000원
        </S.SubContent>
      </S.SubTitle>
      <S.SubTitle>
        브랜드
        <S.SubContent>VISA/mastercard/국내전용/One Way(JCB)</S.SubContent>
      </S.SubTitle>
      <S.Button>
        <Button size="large" onClick={() => goToCart(id)}>
          장바구니 담기
        </Button>
      </S.Button>
    </>
  )
}

export default ProductDetail
