import React from 'react'
import * as S from './style'
import CustomInput from '../../components/common/CustomInput'
import Button from '../../components/common/Button'

function Login() {
  return (
    <S.Container>
      <S.Title>로그인 한 번이면 간편하게!</S.Title>
      <CustomInput disabled="disabled" />
      <S.BtnBox>
        <Button size="medium">로그인</Button>
        <Button size="medium">회원가입</Button>
      </S.BtnBox>
    </S.Container>
  )
}

export default Login
