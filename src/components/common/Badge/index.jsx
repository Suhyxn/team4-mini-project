import React from 'react'
import {
  useGetCardCartQuery,
  useGetLoanCartQuery,
} from '../../../store/slices/cartApiSlice'
import * as S from './style'

function Badge() {
  const {
    data: cards,
    isLoading: cardLoding,
    isError: cardError,
  } = useGetCardCartQuery()
  const {
    data: loans,
    isLoading: loanLoding,
    isError: loanError,
  } = useGetLoanCartQuery()

  return (
    <S.Badge>
      {(
        (cards?.cardList?.length ?? 0) + (loans?.loanList?.length ?? 0)
      ).toString()}
    </S.Badge>
  )
}

export default Badge
