import React from 'react'
import {
  useGetCardCartQuery,
  useGetLoanCartQuery,
} from '../../../store/slices/cartApiSlice'
import * as S from './style'

function Badge() {
  const { data: card } = useGetCardCartQuery()
  const { data: loan } = useGetLoanCartQuery()

  return (
    <S.Badge>{((card?.length ?? 0) + (loan?.length ?? 0)).toString()}</S.Badge>
  )
}

export default Badge
