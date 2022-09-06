import './App.css'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/apis'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Nav from './components/layout/Nav'
import Login from './routes/Login'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Favorites from './routes/Favorites'
import MyPage from './routes/MyPage'
import Recommended from './routes/Recommended'
import ProductDetail from './routes/ProductDetail'
import LoanDetail from './routes/LoanDeatil'
import Cart from './routes/Cart'
import NotFound from './components/layout/NotFound'
import RequireAuth from './components/template/RequireAuth'
import GotoTop from './components/common/GoToTop'
import Filter from './components/common/Filter'
import Search from './routes/Search'
import Additional from './components/template/Additional'
import { CookiesProvider } from 'react-cookie'

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <main className="root">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/additional" element={<Additional />} />
            <Route path="/search" element={<Search />} />
            <Route path="/loan/:id" element={<LoanDetail />} />
            <Route path="/card/:id" element={<ProductDetail />} />
            <Route element={<RequireAuth />}>
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/recommened" element={<Recommended />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <GotoTop />
        </main>
        <Nav />
      </Provider>
    </CookiesProvider>
  )
}
export default App
