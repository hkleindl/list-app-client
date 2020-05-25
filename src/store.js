import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import users from "./reducers/users"

const reducer = combineReducers({
    users
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

  export default store