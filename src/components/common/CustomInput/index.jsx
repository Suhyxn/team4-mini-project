import React, { useState } from 'react'
import * as S from './style'
import { BiXCircle } from 'react-icons/bi'

const CustomInput = (
  {
    disabled,
    active,
    userInput,
    inputHandler,
    inputBlurHandler,
    onUserInputChange,
  },
  ref,
) => {
  return (
    <div>
      <S.Container disabled={disabled}>
        <S.InputBox>
          <S.StyledInput
            type="text"
            active={active.name}
            placeholder="이름"
            name="name"
            value={userInput.name}
            onChange={onUserInputChange}
            onFocus={inputHandler}
          />
          <S.Button
            active={active.name}
            name="name"
            onClick={() => inputBlurHandler('name')}
          >
            <BiXCircle color="rgb(186, 186, 188)" />
          </S.Button>
          <S.StyledLabel active={active.name}>이름</S.StyledLabel>
        </S.InputBox>
      </S.Container>
      <S.Container>
        <S.InputBox>
          <S.StyledInput
            type="text"
            active={active.id}
            placeholder="아이디"
            name="id"
            value={userInput.id}
            onChange={onUserInputChange}
            onFocus={inputHandler}
          />
          <S.Button
            active={active.id}
            name="id"
            onClick={() => inputBlurHandler('id')}
          >
            <BiXCircle color="rgb(186, 186, 188)" />
          </S.Button>

          <S.StyledLabel active={active.id}>아이디</S.StyledLabel>
        </S.InputBox>
      </S.Container>
      <S.Container>
        <S.InputBox>
          <S.StyledInput
            type="password"
            active={active.pwd}
            name="pwd"
            placeholder="비밀번호"
            value={userInput.pwd}
            onChange={onUserInputChange}
            onFocus={inputHandler}
          />
          <S.Button
            active={active.pwd}
            name="pwd"
            onClick={() => inputBlurHandler('pwd')}
          >
            <BiXCircle color="rgb(186, 186, 188)" />
          </S.Button>
          <S.StyledLabel active={active.pwd}>패스워드</S.StyledLabel>
        </S.InputBox>
      </S.Container>
    </div>
  )
}

export default CustomInput
