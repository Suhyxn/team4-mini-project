<<<<<<< HEAD
=======
import { useState } from 'react'
>>>>>>> a3bb7b80d5f1eeaf8f145b047642f444d63f0e12
import './App.css'

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
import UserEdit from './components/template/UserEdit'
import CustomInput from './components/common/CustomInput'

function App() {
  return (
    <Container>
      {/* <main className='appMain'> */}
<<<<<<< HEAD
      {/* <Routes>
          <Route path="/" element={<Home />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/recommened" element={<Recommended />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes> */}
=======
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/recommened" element={<Recommended />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
>>>>>>> a3bb7b80d5f1eeaf8f145b047642f444d63f0e12
      {/* </main> */}
      <CustomInput title="이름" />
      <UserEdit />
      <Nav />
    </Container>
  )
}
export default App
