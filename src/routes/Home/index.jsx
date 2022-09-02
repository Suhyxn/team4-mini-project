import React, { useEffect } from 'react'
import Filter from '../../components/common/Filter'
import IfTab from '../../components/template/IfTab'
import useFilter from '../../components/Hook/useFilter'
import { useGetProductsQuery } from '../../store/slices/productApiSlice'
import Loader from '../../components/layout/Loader'

import { Cookies } from 'react-cookie'

function Home() {
  const cookies = new Cookies()
  useEffect(() => {
    cookies.set(
      'accessToken',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0NUBoYW5tYWlsLm5ldCIsImlkIjoxNCwiZXhwIjoxNjYyMTIyMzg4LCJ1c2VybmFtZSI6IjEyMzQ1QGhhbm1haWwubmV0In0.oDWBk5yhmDk3jNWrRk3bSK5ncp9qOvdWUEiJe-_0_Bl_Ce30QiUVNJFbXYQ84oF6zTKPHWW7I8_SUTiBMTKDRQ',
      { path: '/' },
    )
  }, [])
  const [isActive, setIsActive] = useFilter()
  const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !products) {
    return <div>오류발생!</div>
  }

  return (
    <>
      <Filter onFilterHandler={setIsActive} item={isActive} />
      <IfTab tab={isActive} items={products} />
    </>
  )
}

export default Home
