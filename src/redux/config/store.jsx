import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootreducer.jsx'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)

console.log(store.getState())