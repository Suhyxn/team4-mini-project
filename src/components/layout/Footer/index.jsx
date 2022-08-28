import React from 'react'
import * as S from './style'

function Footer() {
  return (
    <S.Container>
      <p>Copyright © {new Date().getFullYear()} SadariBank</p>
    </S.Container>
  )
}

export default Footer
