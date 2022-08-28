import React from 'react'

function Loan({ item }) {
  const {
    bank_img: imageURL,
    loan_company: bank,
    loan_name: name,
    loan_rate: rates,
    tags: tags,
    isfavorite: favorite,
  } = item
  return (
    <div>
      <img src={imageURL} />
      <p>{bank}</p>
      <p>{name}</p>
      <p>{bank}</p>
    </div>
  )
}

export default Loan
