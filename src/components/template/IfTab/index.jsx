import React from 'react'
import BankTab from '../BankTab'
import LoanTab from '../LoanTab'

function IfTab(props) {
  const tab = props.tab

  if ('loan' === tab) {
    return <LoanTab />
  } else {
    return <BankTab />
  }
}

export default IfTab
