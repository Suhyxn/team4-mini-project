import React from 'react'
import * as S from './style'

function Radio({ items }) {
  console.log(items)
  return (
    <S.Container>
      {items.map((item, index) => (
        <S.List key={index}>
          <S.Input
            type="radio"
            value={item}
            name={`group-${items}`}
            id={item}
          />
          <S.Label htmlFor={item} key={index}>
            <S.Text>{item}</S.Text>
          </S.Label>
        </S.List>
      ))}
    </S.Container>
  )
}

export default Radio
