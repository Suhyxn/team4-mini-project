import { useState } from 'react'
import * as S from './style'
import CustomInput from '../../components/common/CustomInput'
import StyledInput from '../../components/common/StyledInput'
import Button from '../../components/common/Button'

function Login() {
  let [isActive, setIsActive] = useState(false)
  const submitHandler = (text) => {
    console.log(text)
    //호출 api
  }
  const onClickHandler = () => {
    setIsActive(true)
  }

  console.log(isActive)

  return (
    <S.Container>
      <S.Title>로그인 한 번이면 간편하게!</S.Title>
      <CustomInput
        disabled="disabled"
        propFunction={submitHandler}
        isActive={isActive}
      />
      <S.BtnBox>
        <Button size="medium" onClick={onClickHandler}>
          로그인
        </Button>
        <Button size="medium" disabled={isActive}>
          회원가입
        </Button>
      </S.BtnBox>
    </S.Container>
  )
}

export default Login
