import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootreducer.jsx'


export const store = configureStore({
    reducer: rootReducer
})

// console.log(store.getState())