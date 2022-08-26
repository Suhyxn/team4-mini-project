import React, { useState } from 'react'
import * as S from './style'
import { IoIosMenu, IoMdSearch } from 'react-icons/io'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <S.Header>
      <S.LogoContainer>
        <img src="/public/assets/images/logo.png" height="20px" />
        <S.Logo>SadariBank</S.Logo>
      </S.LogoContainer>
      <S.ButtonContainer>
        <S.SearchIcon onClick={() => setOpen((open) => !open)}>
          <IoMdSearch fontSize="1.5rem" />
        </S.SearchIcon>
        {open && <S.SearchBox />}
        <S.MenuBox>
          <IoIosMenu fontSize="2rem" />
        </S.MenuBox>
      </S.ButtonContainer>
    </S.Header>
  )
}

export default Header
