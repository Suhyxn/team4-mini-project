import * as S from './style'

function Filter({ onFilterHandler, item }) {
  return (
    <>
      <S.Container onClick={onFilterHandler}>
        <S.Input type="radio" name="filter" value="loan" id="filterloan" />
        <S.Label htmlFor="filterloan" active={item.loan}>
          대출
        </S.Label>
        <S.Input type="radio" name="filter" value="card" id="filtercard" />
        <S.Label htmlFor="filtercard" active={item.card}>
          카드
        </S.Label>
      </S.Container>
    </>
  )
}

export default Filter
