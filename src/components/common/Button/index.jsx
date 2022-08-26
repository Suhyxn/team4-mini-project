import React from 'react'
import * as S from './style'

function Button({ size, children, ...rest }) {
  return (
    <S.Button size={size} {...rest}>
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  size: 'large',
}

export default Button
