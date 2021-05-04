const actiontypes = () => {
  return {
    products: {
      getProducts: 'GET_PRODUCTS',
      loading: 'LOADING',
      setProducts: 'SET_PRODUCTS',
      setProduct: 'SET_PRODUCT'
    },
    orders: {
      getOrders: 'GET_ORDERS',
      getAllOrders: 'GET_ALL_ORDERS',
      setOrders: 'SET_ORDERS',
      setAllOrders: 'SET_ALL_ORDERS',
      emptyOrders: 'EMPTY_ORDERS'
    },
    auth: {
      login: 'LOGIN',
      logout: 'LOGOUT',
      loginToken: 'LOGIN_TOKEN',
      setUserDetails: 'SET_USER_DETAILS'
    },
    cart: {
      increment: 'CART_INCREMENT',
      decrement: 'CART_DECREMENT',
      addCartProduct: 'ADD_CART_PRODUCT',
      addExistingCartProduct: 'ADD_EXISTING_CART_PRODUCT',
      addNewCartProduct: 'ADD_NEW_CART_PRODUCT',
      remCartProduct: 'REM_CART_PRODUCT',
      remCartRow: 'REM_CART_ROW',
      sendOrder: 'SEND_ORDER',
      emptyCart: 'EMPTY_CART'
    },
    users: {
      getUsers: 'GET_USERS',
      setUsers: 'SET_USERS',
    }
  }
}

export default actiontypes;