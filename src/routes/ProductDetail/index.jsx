import React from 'react'
import * as S from './style'
import { useHistory } from 'react-router-dom'
import { card1 } from '../../constants/card'
import { AiOutlineArrowLeft, AiOutlineShopping } from 'react-icons/ai'
import { BiStoreAlt, BiHomeHeart } from 'react-icons/bi'
import { RiOilLine } from 'react-icons/ri'
import Button from '../../components/common/Button'

function ProductDetail() {
  let history = useHistory()

  return (
    <>
      <S.Header>
        <AiOutlineArrowLeft
          size="30"
          onClick={() => {
            history.goBack()
          }}
        />
        <S.BankTitle>{card1.bank}</S.BankTitle>
      </S.Header>
      <S.Content>
        <S.CardImage src="/public/assets/images/Card.png" alt="card" />
        <S.CardTitle>{card1.title}</S.CardTitle>
        <S.CardSubTilte>{card1.subtitle}</S.CardSubTilte>
        <S.DescriptionContainer>
          <S.Description>
            <BiStoreAlt className="icons" />
            <div className="description">{card1.description1}</div>
          </S.Description>
          <S.Description>
            <AiOutlineShopping className="icons" />
            <div className="description">{card1.description2}</div>
          </S.Description>
          <S.Description>
            <RiOilLine className="icons" />
            <div className="description">{card1.description3}</div>
          </S.Description>
          <S.Description>
            <BiHomeHeart className="icons" />
            <div className="description">{card1.description4}</div>
          </S.Description>
        </S.DescriptionContainer>
      </S.Content>
      <S.MenuContainer>
        <S.Input type="radio" name="filter" value="card" id="filterloan" />
        <S.Label for="filterloan">연회비/브랜드</S.Label>
        <S.Input type="radio" name="filter" value="card" id="filtercard" />
        <S.Label for="filtercard">주요혜택</S.Label>
        <S.Input type="radio" name="filter" value="card" id="role" />
        <S.Label for="role">가입대상</S.Label>
      </S.MenuContainer>
      <S.SubTitle>
        연회비
        <S.SubContent>
          One Way(JCB) 10,000원
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
        <Button size="large" className="btn">
          장바구니 담기
        </Button>
      </S.Button>
    </>
  )
}

export default ProductDetail
