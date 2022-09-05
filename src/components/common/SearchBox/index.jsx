import React from 'react'
import { useGetSearchDataQuery } from '../../../store/slices/productApiSlice'
import Card from '../Card'
import Loan from '../Loan'

function SearchBox({ data }) {
  const { data: searchData, isLoading, isError } = useGetSearchDataQuery(data)

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (isError) {
    return <div>오류발생!</div>
  }

  if (!searchData) {
    return <div>찾는 데이터가 없습니다.</div>
  }

  return (
    <div>
      {data?.productType === 'card'
        ? searchData.map((item) => <Card item={item} key={item.cardId} />)
        : searchData.map((item) => <Loan item={item} key={item.loanId} />)}
    </div>
  )
}

export default SearchBox
