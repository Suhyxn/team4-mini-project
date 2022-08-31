import React, { useState } from 'react'
import Filter from '../../components/common/Filter'
import IfTab from '../../components/template/IfTab'
import useFilter from '../../components/Hook/useFilter'

function Home() {
  const [isActive, setIsActive] = useFilter()
  return (
    <>
      <Filter onFilterHandler={setIsActive} item={isActive} />
      <IfTab tab={isActive} />
    </>
  )
}

export default Home
