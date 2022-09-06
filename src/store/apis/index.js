import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../slices/productApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartApi } from '../slices/cartApiSlice'
import { favoritesApi } from '../slices/favoriteApiSlice'
import { authApi } from '../slices/authApiSlice'
import { userApi } from '../slices/userApiSlice'
import { orderApi } from '../slices/orderApiSlice'
import authReducer from '../slices/authSlice'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      cartApi.middleware,
      favoritesApi.middleware,
      authApi.middleware,
      userApi.middleware,
      orderApi.middleware,
    ),
})

setupListeners(store.dispatch)
