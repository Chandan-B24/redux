import {configureStore} from '@reduxjs/toolkit'
import employeeReducer from './employee'
import taskReducer from './taskSlice'
import logger from 'redux-logger'
import error from '../middleware/error'

const store = configureStore({reducer : {
    tasks : taskReducer,
    employees : employeeReducer
    },
    middleware :(getMiddleware) => [...getMiddleware(),logger,error],
    })

export default store
