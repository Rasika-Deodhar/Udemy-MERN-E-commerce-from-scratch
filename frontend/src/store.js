import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
})

/**
 * Can cause undefined error if localStorage is empty
 * In that case set the value to empty array as given below the code
 *  */
// const cartItemsFromStorage =
//   localStorage.getItem('cartItems') !== undefined
//     ? JSON.parse(localStorage.getItem('cartItems'))
//     : []

const userInfoFromStorage =
  localStorage.getItem('userInfo') !== undefined
    ? JSON.parse(localStorage.getItem('userInfo'))
    : []

const cartItemsFromStorage = []
// const userInfoFromStorage = []

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
