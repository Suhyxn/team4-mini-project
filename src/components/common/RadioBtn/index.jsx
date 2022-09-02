import React, { useContext } from 'react'
import { AddFormContext } from '../../template/Additional'
import * as S from './style'

function RadioBtn({ items, id }) {
  const { addInfo, setAddInfo } = useContext(AddFormContext)
  return (
    <S.Container>
      {items.map((item, index) => (
        <S.List key={index}>
          <S.Input
            type="radio"
            value={item}
            name={`group-${items}`}
            id={item}
            required="required"
            onChange={(e) =>
              setAddInfo((prev) => ({ ...prev, [id]: e.target.value }))
            }
          />
          <S.Label htmlFor={item} key={index}>
            <S.Text>{item}</S.Text>
          </S.Label>
        </S.List>
      ))}
    </S.Container>
  )
}

export default RadioBtn
