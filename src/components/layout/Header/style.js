import styled from 'styled-components'
import media from '../../../style/media'

export const Header = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  min-height: 56px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 12%);
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 1.1rem;
  cursor: pointer;
  font-family: 'GmarketSansBold';
`

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const SearchBox = styled.input`
  position: fixed;
  top: 56px;
  left: 0;
  border-radius: 0;
  margin: 0;
  height: 56px;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
`
export const SearchIcon = styled.div`
  cursor: pointer;
`

export const MenuBox = styled.div`
  display: none;
  ${media.tablet`
display: block;
`}
`
