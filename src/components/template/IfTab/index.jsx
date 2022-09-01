import React from 'react'
import Card from '../../common/Card'
import Loan from '../../common/Loan'

function IfTab({ tab, items }) {
  return tab.loan ? (
    <>
      {items.loanList.map((item) => (
        <Loan item={item} key={item.loanId} />
      ))}
    </>
  ) : (
    <>
      {items.cardList.map((item) => (
        <Card item={item} key={item.cardId} />
      ))}
    </>
  )
}

export default IfTab
