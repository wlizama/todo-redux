import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import middleware from './middleware'

// con middleware
// reducer, estado inicial de store, middleware
const store = createStore(reducer, undefined, applyMiddleware(middleware))

export default store