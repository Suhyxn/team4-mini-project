import React from 'react'
import { useGetCardCartsQuery } from '../../../store/slices/cartApiSlice'
import * as S from './style'

function Badge() {
  const { data: cards, isLoading, isError } = useGetCardCartsQuery()

  return <S.Badge>{(cards?.cardList?.length ?? 0).toString()}</S.Badge>
}

export default Badge
