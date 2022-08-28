import React, { useState } from 'react'
import Button from '../Button'
import * as S from './style'

function BtnMap({ title, items, size }) {
  const [active, setActive] = useState()

  const activeHandler = (index) => {
    setActive(index)
  }

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.BtnContainer>
        {items.map((item, index) => (
          <Button
            Fontsize={size}
            key={index}
            active={`${active}` == index ? 'active' : ''}
            size="radio"
            onClick={() => activeHandler(index)}
          >
            {item}
          </Button>
        ))}
      </S.BtnContainer>
    </S.Container>
  )
}

export default BtnMap
