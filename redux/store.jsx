import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from './reducers/toggleReducer'

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
})