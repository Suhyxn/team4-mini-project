import React from 'react'
import * as S from './style'

function Button({ size, children, active, ...rest }) {
  console.log('active', active)
  return (
    <S.Button size={size} active={active} {...rest}>
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  size: 'large',
}

export default Button
