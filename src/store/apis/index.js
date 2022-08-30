import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../slices/productApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartApi } from '../slices/cartApiSlice'
import { favoritesApi } from '../slices/favoriteApiSlice'

export const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsSlice.middleware,
      cartApi.middleware,
      favoritesApi.middleware,
    ),
})

setupListeners(store.dispatch)
