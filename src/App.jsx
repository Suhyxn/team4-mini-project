import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/apis'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './routes/Home'
import Nav from './components/layout/Nav'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Favorites from './routes/Favorites'
import MyPage from './routes/MyPage'
import Recommended from './routes/Recommended'
import Cart from './routes/Cart'
import NotFound from './components/layout/NotFound'

function App() {
  return (
    <Provider store={store}>
      {/* <main className='appMain'> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/recommened" element={<Recommended />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* </main> */}
      <Nav />
    </Provider>
  )
}
export default App
