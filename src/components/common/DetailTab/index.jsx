import React, { useState } from 'react'
import * as S from './style'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import {
  MdDeliveryDining,
  MdOutlineLocalConvenienceStore,
  MdOutlineDirectionsTransitFilled,
  MdPhonelinkRing,
  MdMoney,
  MdLiveTv,
} from 'react-icons/md'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { SiSamsungpay } from 'react-icons/si'
import GuidBox from '../GuideBox'

function DetailTab({ data }) {
  const [tabValue, setTabValue] = useState('annualfee')
  const TabChangeHandler = (e) => {
    setTabValue(e.target.for)
  }
  const icons = [
    {
      icon: <SiSamsungpay size="3.5rem" color="#00a49d" />,
      name: '페이결제',
    },
    {
      icon: <MdOutlineLocalConvenienceStore size="3.5rem" color="#00a49d" />,
      name: '편의점',
    },
    {
      icon: <MdDeliveryDining size="3.5rem" color="#00a49d" />,
      name: '딜리버리',
    },
    {
      icon: <MdOutlineDirectionsTransitFilled size="3.5rem" color="#00a49d" />,
      name: '대중교통',
    },
    {
      icon: <MdPhonelinkRing size="3.5rem" color="#00a49d" />,
      name: '통신',
    },
    {
      icon: <MdMoney size="3.5rem" color="#00a49d" />,
      name: '생활비',
    },
    {
      icon: <MdLiveTv size="3.5rem" color="#00a49d" />,
      name: '디지털구독',
    },
  ]

  return (
    <div>
      <S.MenuContainer>
        <S.Box>
          <S.Input type="radio" id="annualfee" name="filter" defaultChecked />
          <S.Label htmlFor="annualfee" onClick={TabChangeHandler}>
            연회비/브랜드
          </S.Label>
        </S.Box>
        <S.Box>
          <S.Input type="radio" id="benefits" name="filter" />
          <S.Label htmlFor="benefits" onClick={TabChangeHandler}>
            주요혜택
          </S.Label>
        </S.Box>
        <S.Box>
          <S.Input type="radio" name="filter" id="target" />
          <S.Label htmlFor="target" onClick={TabChangeHandler}>
            가입대상
          </S.Label>
        </S.Box>
      </S.MenuContainer>

      {/* <S.SubTitle>
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
      </S.SubTitle> */}

      {/* <S.GuideContiner>
        <S.Guide class="ui-notice">
          <AiOutlineExclamationCircle />
          상품 이용 전 반드시 혜택별 상세 안내 및 서비스 제공조건을 확인하시기
          바랍니다.
        </S.Guide>
        <S.ListBox>
          {icons.map((icon) => (
            <S.List>
              <div>{icon.icon}</div>
              <S.Desc>
                <strong>{icon.name}</strong>
                <S.Text>
                  각종 페이 결제시 <span>1.0</span>청구할인
                  <BsFillPlusCircleFill size="1.5rem" />
                </S.Text>
              </S.Desc>
            </S.List>
          ))}
        </S.ListBox>
      </S.GuideContiner> */}
      <GuidBox />
    </div>
  )
}

export default DetailTab
