import {createStore,applyMiddleware} from 'redux'
import reducers from './reducer/rootReducer'
import reduxthunk from 'redux-thunk'
import logger from 'redux-logger'

let store = createStore(reducers,applyMiddleware(logger,reduxthunk))

export default store
