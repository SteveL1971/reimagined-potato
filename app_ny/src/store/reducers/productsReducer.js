import actiontypes from '../actiontypes';

let initState = {
  products: null,
  product: null,
  loading: true
}

const productsReducer = (state = initState, action) => {

  switch(action.type) {
    
    case actiontypes().products.loading:
      return {
        ...state,
        loading: action.payload
      }
    case actiontypes().products.setProducts:
      return {
        ...state,
        products: action.payload
      }
    case actiontypes().products.setProduct:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state;
  }

}

export default productsReducer;