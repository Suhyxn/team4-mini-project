import React from 'react'
import Button from '../../components/common/Button'
import * as S from './style'

function Login() {
  return (
    <>
      <S.Main>
        <S.MainTxt>
          자산, 나도 늘릴 수 있을까?
          <br />
          사다리타시조에선 됩니다
        </S.MainTxt>
        <S.Container>
          <S.Txt>
            루나코인
            <br />
            저리가라
          </S.Txt>
          <S.Line />
          <S.Txt>
            내 돈은
            <br />
            내가관리
          </S.Txt>
          <S.Line />
          <S.Txt>
            돈 맡긴
            <br />
            직원 n명
          </S.Txt>
        </S.Container>
        <Button size="large">로그인하기</Button>
      </S.Main>
    </>
  )
}

export default Login
