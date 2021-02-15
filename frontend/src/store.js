import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'
import { orderCreateReducer } from './reducers/orderReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
})

/**
 * Can cause undefined error if localStorage is empty
 * In that case set the value to empty array as given below the code
 *  */
const cartItemsFromStorage =
  localStorage.getItem('cartItems') !== undefined
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage =
  localStorage.getItem('userInfo') !== undefined
    ? JSON.parse(localStorage.getItem('userInfo'))
    : []

const shippingAddressFromStorage =
  localStorage.getItem('shippingAddress') !== undefined
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : []

// const cartItemsFromStorage = []
// const userInfoFromStorage = []
// const shippingAddressFromStorage = []

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
