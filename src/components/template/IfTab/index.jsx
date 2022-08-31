import React from 'react'
import BankTab from '../BankTab'
import LoanTab from '../LoanTab'

function IfTab(props) {
  const tab = props.tab

  return tab.loan ? <LoanTab /> : <BankTab />
}

export default IfTab
