import React, { useState } from 'react'
import Filter from '../../components/common/Filter'
import IfTab from '../../components/template/IfTab'
import useFilter from '../../components/Hook/useFilter'
import { useGetProductsQuery } from '../../store/slices/productApiSlice'
import Loader from '../../components/layout/Loader'

function Home() {
  const [isActive, setIsActive] = useFilter()
  const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !products) {
    return <div>오류발생!</div>
  }

  console.log(isActive, 'here')

  return (
    <>
      <Filter onFilterHandler={setIsActive} item={isActive} />
      <IfTab tab={isActive} items={products} />
    </>
  )
}

export default Home
