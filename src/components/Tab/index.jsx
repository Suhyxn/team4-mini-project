import { NavLink } from 'react-router-dom'

let activeStyle = {
  color: 'rgb(6, 182, 212)',
}

function Tab() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recommened">Recommended</NavLink>
      <NavLink to="/favorites">Favorite</NavLink>
      <NavLink to="/mypage">마이페이지</NavLink>
    </div>
  )
}

export default Tab
