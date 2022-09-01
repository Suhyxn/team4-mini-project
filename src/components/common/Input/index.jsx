import React from 'react'
import Form from 'react-bootstrap/Form'
// size = lg || sm
//placeholder : string
function Input({ size = null, placeholder }) {
  //lg, sm
  return (
    <div>
      <Form.Control size={size} type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input
