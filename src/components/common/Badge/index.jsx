import React from 'react'
import { useGetCartQuery } from '../../../store/slices/cartApiSlice'
import * as S from './style'

function Badge() {
  const { data: carts } = useGetCartQuery()
  console.log(carts.cardList.length + carts.loanList.length)
  // let num = carts.cardList.length + carts.loanList.length

  // console.log(carts.cardList.length + carts.loanList.length)

  return <S.Badge>{carts.cardList.length + carts.loanList.length}</S.Badge>
}

export default Badge
