import React from 'react'
import {
  useGetCardCartQuery,
  useGetLoanCartQuery,
} from '../../../store/slices/cartApiSlice'
import * as S from './style'

function Badge() {
  const { data: cards } = useGetCardCartQuery()
  const { data: loans } = useGetLoanCartQuery()

  return (
    <S.Badge>
      {(
        (cards?.cardList?.length ?? 0) + (loans?.loanList?.length ?? 0)
      ).toString()}
    </S.Badge>
  )
}

export default Badge
