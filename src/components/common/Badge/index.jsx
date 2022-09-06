import React from 'react'
import { useGetCartQuery } from '../../../store/slices/cartApiSlice'
import * as S from './style'

function Badge() {
  const { data: carts } = useGetCartQuery()

  return (
    <S.Badge>
      {(
        (carts?.cardList.length ?? 0) + (carts?.loanList.length ?? 0)
      ).toString()}
    </S.Badge>
  )
}

export default Badge
