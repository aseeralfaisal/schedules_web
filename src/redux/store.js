import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slice'
import storage from 'redux-persist/lib/storage'
// import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})
export default store
