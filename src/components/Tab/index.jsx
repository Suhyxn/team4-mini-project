import { NavLink } from 'react-router-dom'
import * as S from './style'

let activeStyle = {
  color: 'rgb(6, 182, 212)',
}

function Tab() {
  return (
    <S.Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recommened">Recommended</NavLink>
      <NavLink to="/favorites">Favorite</NavLink>
      <NavLink to="/mypage">마이페이지</NavLink>
    </S.Container>
  )
}

export default Tab
