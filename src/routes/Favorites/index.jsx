import Loader from '../../components/layout/Loader'
import Card from '../../components/common/Card'
import Loan from '../../components/common/Loan'
import { useGetFavoritesQuery } from '../../store/slices/favoriteApiSlice'
import * as S from './style'

function Favorites() {
  const { data: items, isLoading, isError } = useGetFavoritesQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !items) {
    return <div>오류발생!</div>
  }

  return (
    <>
      <S.Title>
        <p>
          <span>{items?.cardList.length + items?.loanList.length}</span>
          개의 관심리스트가
        </p>
        <p>있습니다.</p>
      </S.Title>
      {items.loanList.map((item) => (
        <Loan item={item} key={item.loanId} />
      ))}
      {items.cardList.map((item) => (
        <Card item={item} key={item.cardId} />
      ))}
    </>
  )
}

export default Favorites
