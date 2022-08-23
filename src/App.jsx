import { Route, Routes } from 'react-router-dom'
import Tab from './components/Tab'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Favorites from './pages/Favorites'
import MyPage from './pages/MyPage'
import Recommended from './pages/Recommended'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/recommened" element={<Recommended />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Tab />
    </div>
  )
}
export default App
