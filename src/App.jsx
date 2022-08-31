import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/apis'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './routes/Home'
import Nav from './components/layout/Nav'
import Login from './routes/Login'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Favorites from './routes/Favorites'
import MyPage from './routes/MyPage'
import Recommended from './routes/Recommended'
import Cart from './routes/Cart'
import NotFound from './components/layout/NotFound'
import RequireAuth from './components/template/RequireAuth'
import GotoTop from './components/common/GoToTop'

function App() {
  return (
    <Provider store={store}>
      <main className="root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/recommened" element={<Recommended />} />
          <Route path="/cart" element={<Cart />} />

          {/* 토큰 생기면 주석 삭제하기 */}
          {/* <Route element={<RequireAuth />}>    
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/recommened" element={<Recommended />} />
          <Route path="/cart" element={<Cart />} />
        </Route> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Nav />
    </Provider>
  )
}
export default App
