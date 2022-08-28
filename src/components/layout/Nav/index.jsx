import React from 'react'
import * as S from './style'
import { NavLink } from 'react-router-dom'

function TempNav() {
  return (
    <S.NavContainer>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'grey' : 'white' })}
        to="/recommened"
      >
        <S.NavBtn>
          상품
          <br />
          추천
        </S.NavBtn>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'grey' : 'white' })}
        to="/favorites"
      >
        <S.NavBtn>
          즐겨
          <br />
          찾기
        </S.NavBtn>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'grey' : 'white' })}
        to="/"
      >
        <S.NavBtn>
          상품
          <br />
          리스트
        </S.NavBtn>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'grey' : 'white' })}
        to="/cart"
      >
        <S.NavBtn>
          장바
          <br />
          구니
        </S.NavBtn>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'grey' : 'white' })}
        to="/mypage"
      >
        <S.NavBtn>
          마이
          <br />
          페이지
        </S.NavBtn>
      </NavLink>
    </S.NavContainer>
  )
}

export default TempNav
