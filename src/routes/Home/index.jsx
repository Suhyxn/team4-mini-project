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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0QGhhbm1haWwubmV0IiwiaWQiOjIsImV4cCI6MTY2MjEwNzc0OCwidXNlcm5hbWUiOiIxMjM0QGhhbm1haWwubmV0In0.qoRv24QxFd1ptLa1yD0VNVI6aAvvX1b5vatnpPFnoypD2sjfE4nkuAcw6Hw-ZL91dSUHqDiWMUh1yp_NzN1USg',
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
