import { NavLink } from 'react-router-dom'
import * as S from './style'

function Nav() {
  return (
    <S.Container>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
        to="/recommened"
      >
        Recommended
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
        to="/favorites"
      >
        Favorite
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
        to="/mypage"
      >
        마이페이지
      </NavLink>
    </S.Container>
  )
}

export default Nav
