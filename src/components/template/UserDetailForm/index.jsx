import {
  gender,
  age,
  job,
  hobby,
  house,
  income,
} from '../../../constants/buttonData'
import RadioBtn from '../../common/RadioBtn'
import Input from '../../common/Input'
import * as S from './style'
import { useState, useContext } from 'react'
import { AddFormContext } from '../../template/Additional'

function UserDetailForm() {
  const { addInfo, setAddInfo } = useContext(AddFormContext)
  return (
    <S.Container>
      <S.SubTitle>성별</S.SubTitle>
      <RadioBtn items={gender} id={'gender'} />
      <S.SubTitle>나이</S.SubTitle>
      <RadioBtn items={age} id={'age'} />
      <S.SubTitle>직업</S.SubTitle>
      <RadioBtn items={job} id={'job'} />
      <S.SubTitle>연소득 (단위: 만원)</S.SubTitle>
      <RadioBtn items={income} id={'income'} />
      <S.SubTitle>취미여부</S.SubTitle>
      <RadioBtn items={hobby} id={'hobby'} />
      <S.SubTitle>자가여부</S.SubTitle>
      <RadioBtn items={house} id={'house'} />
    </S.Container>
  )
}

export default UserDetailForm
