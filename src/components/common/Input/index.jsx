import React from 'react'
import Form from 'react-bootstrap/Form'
// size = lg || sm
//placeholder : string
function Input({ size = null, placeholder }) {
  //lg, sm
  return (
    <>
      <Form.Control size={size} type="text" placeholder={placeholder} />
    </>
  )
}

export default Input
