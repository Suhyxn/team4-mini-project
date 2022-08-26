import React, { useState } from 'react'
import Button from '../../../common/Button'
import * as S from './style'

function Piece({ title, items }) {
  const [active, setActive] = useState()

  const activeHandler = (index) => {
    setActive(index)
  }

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.BtnContainer>
        {items.map((item, index) => (
          <Button
            key={index}
            active={`${active}` == index ? 'active' : ''}
            size="radio"
            onClick={() => activeHandler(index)}
          >
            {item}
          </Button>
        ))}
      </S.BtnContainer>
    </>
  )
}

export default Piece
