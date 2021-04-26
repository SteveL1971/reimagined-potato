import actiontypes from '../actiontypes';
import axios from '../../axios';

export const increment = amount => {
  return {
    type: actiontypes().cart.increment,
    amount
  }
}

export const decrement = amount => {
  return {
    type: actiontypes().cart.decrement,
    amount
  }
}

export const addCartProduct = (product) => {
  return {
    type: actiontypes().cart.addCartProduct,
    product
  }
}

export const remCartProduct = product => {
  return {
    type: actiontypes().cart.remCartProduct,
    product
  }
}

export const remCartRow = product => {
  return {
    type: actiontypes().cart.remCartRow,
    product
  }
}

export const sendOrder = payload => {
  axios.post('/orders/order', payload)
  return {
    type: actiontypes().cart.sendOrder,
  }
}

export const emptyCart = () => {
  return {
    type: actiontypes().cart.emptyCart,
    payload: 0
  }
}

