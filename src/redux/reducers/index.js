import {combineReducers} from 'redux'
import reposReducer from './data'

const rootReducer = combineReducers({ repos: reposReducer })

export default rootReducer