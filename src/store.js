import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import users from "./reducers/users.js"
import currentUser from "./reducers/currentUser.js"
import loginForm from "./reducers/loginForm.js"
import myLists from "./reducers/myLists.js"
import signUpForm from "./reducers/signUpForm.js"

const reducer = combineReducers({
  users,  
  currentUser,
  loginForm,
  myLists,
  signUpForm
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

  export default store