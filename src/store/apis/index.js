import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../slices/productApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartApi } from '../slices/cartApiSlice'
import { favoritesApi } from '../slices/favoriteApiSlice'
import { authApi } from '../slices/authApiSlice'
import { orderApi } from '../slices/orderApiSlice'
import authReducer from '../slices/authSlice'

export const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsSlice.middleware,
      cartApi.middleware,
      favoritesApi.middleware,
      authApi.middleware,
      orderApi.middleware,
    ),
})

setupListeners(store.dispatch)
