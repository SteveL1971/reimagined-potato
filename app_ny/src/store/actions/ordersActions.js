import actiontypes from '../actiontypes';
// import axios from 'axios';
import axios from '../../axios';

export const getOrders = (id) => {
  return async dispatch => {
    const res = await axios.get(`/orders/${id}`)
    dispatch(setOrders(res.data));
  }
}

export const setOrders = (orders) => {
  return {
    type: actiontypes().orders.setOrders,
    payload: orders
  }
}

export const setProduct = (product) => {
  return {
    type: actiontypes().products.setProduct,
    payload: product
  }
}

export const addProduct = (title, body) => {
  return () => {
    const product = {
      title,
      body,
      created: Date.now()
    }
    axios.post('http://localhost:3000/products', product)
  }
}

export const emptyOrders = () => {
  return {
    type: actiontypes().orders.emptyOrders,
    payload: 0
  }
}