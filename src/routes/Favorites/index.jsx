import React, { useState } from 'react'
import BankTab from '../../components/template/BankTab'
import LoanTab from '../../components/template/LoanTab'

function Favorites(props) {
  const fav = props.favorites

  return (
    <>
      <BankTab />
      <LoanTab />
    </>
  )
}

export default Favorites
