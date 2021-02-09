import {combineReducers} from 'redux'
import loginreducer from './loginReducer'

let reducers = combineReducers({userlogin: loginreducer})

export default reducers