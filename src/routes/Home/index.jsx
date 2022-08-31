import React, { useState } from 'react'
import BankTab from '../../components/template/BankTab'
import LoanTab from '../../components/template/LoanTab'
import Filter from '../../components/common/Filter'

function Home() {
  const { value, setValue } = useState({
    bank: true,
    loan: false,
  })

  const filterHandler = () => {
    console.log('hello~')
    // const { name } = e.target.value
    // console.log(name)
  }
  return (
    <>
      <Filter />
      {/* <BankTab name="bank" onClick={filterHandler} />
      <LoanTab name="loan" onClick={filterHandler} /> */}
    </>
  )
}

export default Home
