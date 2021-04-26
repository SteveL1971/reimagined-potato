import actiontypes from '../actiontypes';
// import axios from 'axios';
import axios from '../../axios';

export const getProducts = () => {
  return async dispatch => {
    dispatch(loading(true));
    const res = await axios.get('/products/')
    
    setTimeout(() => {
      dispatch(setProducts(res.data));
      dispatch(loading(false));
    }, 100)
  }
}

export const loading = (payload) => {
  return {
    type: actiontypes().products.loading,
    payload
  }
}

export const setProducts = (products) => {
  return {
    type: actiontypes().products.setProducts,
    payload: products
  }
}

export const getOneProduct = _id => {
  return async dispatch => {
    dispatch(loading(true));

    const res = await axios.get(`/products/${_id}`)
    
    setTimeout(() => {
      dispatch(setProduct(res.data));
      dispatch(loading(false));
    }, 100)
  }
}

//   


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