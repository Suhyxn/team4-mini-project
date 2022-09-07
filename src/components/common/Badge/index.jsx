import React from 'react'
import {
  useGetCardCartsQuery,
  useGetLoanCartsQuery,
} from '../../../store/slices/cartApiSlice'
import * as S from './style'

function Badge() {
  const {
    data: cards,
    isLoading: cardLoding,
    isError: cardError,
  } = useGetCardCartsQuery()
  const {
    data: loans,
    isLoading: loanLoding,
    isError: loanError,
  } = useGetLoanCartsQuery()
  return (
    <S.Badge>
      {(
        (cards?.cardList?.length ?? 0) + (loans?.loanList?.length ?? 0)
      ).toString()}
    </S.Badge>
  )
}

export default Badge
