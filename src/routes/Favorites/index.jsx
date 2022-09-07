import Loader from '../../components/layout/Loader'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'
import {
  useGetCardFavoritesQuery,
  useGetLoanFavoritesQuery,
} from '../../store/slices/favoriteApiSlice'
import * as S from './style'

function Favorites() {
  const {
    data: cards,
    isLoading: cardLoding,
    isError: cardError,
  } = useGetCardFavoritesQuery()
  const {
    data: loans,
    isLoading: loanLoding,
    isError: loanError,
  } = useGetLoanFavoritesQuery()

  if (cardLoding || loanLoding) {
    return <Loader />
  }

  if (cardError || loanError || !cards || !loans) {
    return <div>오류발생!</div>
  }

  return (
    <>
      <S.Title>
        <p>
          <span>
            {(
              (cards?.cardList?.length ?? 0) + (loans?.loanList?.length ?? 0)
            ).toString()}
          </span>
          개의 관심리스트가
        </p>
        <p>있습니다.</p>
      </S.Title>
      {loans?.loanList?.map((item) => (
        <Loan item={item} key={item.loanId} />
      ))}
      {cards?.cardList?.map((item) => (
        <Card item={item} key={item.cardId} />
      ))}
    </>
  )
}

export default Favorites
