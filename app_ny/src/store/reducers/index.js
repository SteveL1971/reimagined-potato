import { combineReducers } from 'redux';

import productsReducer from './productsReducer'
import ordersReducer from './ordersReducer'
import auth from './authReducer'
import cartReducer from './cartReducer'

export default combineReducers({
  productsReducer,
  ordersReducer,
  auth,
  cartReducer
})