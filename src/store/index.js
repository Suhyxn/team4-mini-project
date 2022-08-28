import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../api/productApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
})

setupListeners(store.dispatch)
