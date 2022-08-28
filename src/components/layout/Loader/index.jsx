import React from 'react'
import * as S from './style'
import Spinner from 'react-bootstrap/Spinner'

function Loader() {
  return (
    <S.Container>
      <Spinner animation="border" role="status" variant="success">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <S.Message>Please wait... </S.Message>
    </S.Container>
  )
}

export default Loader
