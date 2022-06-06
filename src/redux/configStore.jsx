import {applyMiddleware, configureStore, createStore} from '@reduxjs/toolkit'
import  loadingReducer  from './reducer/loadingReducer'
import userReducer from './reducer/userReducer'

export const store = configureStore({
    reducer:{
        userReducer,
        loadingReducer: loadingReducer,

    }
})

