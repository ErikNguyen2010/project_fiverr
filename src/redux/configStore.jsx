import {applyMiddleware, configureStore, createStore} from '@reduxjs/toolkit'
import  loadingReducer  from './reducer/loadingReducer'
import userReducer from './reducer/userReducer'
import workReducer from './reducer/workReducer'

export const store = configureStore({
    reducer:{
        userReducer,
        loadingReducer: loadingReducer,
        workReducer,

    }
})

