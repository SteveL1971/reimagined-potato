import actiontypes from '../actiontypes';
// import axios from 'axios';
import axios from '../../axios';

export const getOrders = (id) => {
  return async dispatch => {
    const res = await axios.get(`/orders/${id}`)
    dispatch(setOrders(res.data));
  }
}

export const getAllOrders = () => {
  return async dispatch => {
    const res = await axios.get(`/orders/`)
    dispatch(setAllOrders(res.data));
  }
}

export const setOrders = (orders) => {
  return {
    type: actiontypes().orders.setOrders,
    payload: orders
  }
}

export const setAllOrders = (orders) => {
  return {
    type: actiontypes().orders.setAllOrders,
    payload: orders
  }
}

export const setProduct = (product) => {
  return {
    type: actiontypes().products.setProduct,
    payload: product
  }
}

// export const toggleComplete = (orderDetails) => {
//   console.log(orderDetails)
//   axios.patch('/orders/order', orderDetails)
//   return {
//     type: actiontypes().orders.toggleComplete,
//   }
// }

export const toggleComplete = (orderDetails) => {
  return async dispatch => {
    await axios.patch('/orders/order', orderDetails)
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