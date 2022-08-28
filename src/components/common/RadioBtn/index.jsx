import React from 'react'
import * as S from './style'
import { gender } from '../../../constants/buttonData'

function RadioBtn({ value }) {
  return (
    <S.Container>
      {gender.map((item, index) => (
        <S.List>
          <S.Input type="radio" value={item} name="group" id={item} />
          <S.Label htmlFor={item} key={index}>
            <S.Text>{item}</S.Text>
          </S.Label>
        </S.List>
      ))}
    </S.Container>
  )
}

export default RadioBtn
