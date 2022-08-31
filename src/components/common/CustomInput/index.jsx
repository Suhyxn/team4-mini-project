import React, { forwardRef, useState } from 'react'
import * as S from './style'

const CustomInput = forwardRef((props, ref) => {
  let [active, setActive] = useState({
    name: false,
    id: false,
    pwd: false,
  })
  const inputHandler = (e) => {
    const { name } = e.target
    setActive({
      ...active,
      [name]: !active[name],
    })
  }
  const inputBlurHandler = (e) => {
    setActive({
      name: false,
      id: false,
      pwd: false,
    })
  }

  return (
    <>
      <S.Container onFocus={inputHandler} onBlur={inputBlurHandler}>
        <S.InputBox>
          <S.StyledInput
            type="text"
            active={active.name}
            placeholder="입력하세요"
            name="name"
          />
          <S.StyledLabel active={active.name}>이름</S.StyledLabel>
        </S.InputBox>
      </S.Container>
      <S.Container onFocus={inputHandler} onBlur={inputBlurHandler}>
        <S.InputBox>
          <S.StyledInput
            type="text"
            active={active.id}
            placeholder="입력하세요"
            name="id"
          />
          <S.StyledLabel active={active.id}>아이디</S.StyledLabel>
        </S.InputBox>
      </S.Container>
      <S.Container onFocus={inputHandler} onBlur={inputBlurHandler}>
        <S.InputBox>
          <S.StyledInput
            type="text"
            active={active.pwd}
            placeholder="입력하세요"
            name="pwd"
          />
          <S.StyledLabel active={active.pwd}>비밀번호</S.StyledLabel>
        </S.InputBox>
      </S.Container>
    </>
  )
})

export default CustomInput
