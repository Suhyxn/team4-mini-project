import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Nav from './components/layout/Nav'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Favorites from './routes/Favorites'
import MyPage from './routes/MyPage'
import Recommended from './routes/Recommended'
import Cart from './routes/Cart'
import Loader from './components/layout/Loader'

function App() {
  return (
    <div>
      <Loader />
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
      <Nav />
    </div>
  )
}
export default App
