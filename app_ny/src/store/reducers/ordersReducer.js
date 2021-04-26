import actiontypes from '../actiontypes';

let initState = {
  orders: [],
}

const ordersReducer = (state = initState, action) => {

  switch(action.type) {
    
    case actiontypes().orders.getOrders:
      return {
        ...state,
        orders: action.payload
      }
    case actiontypes().orders.setOrders:
      return {
        ...state,
        orders: action.payload
      }

    case actiontypes().orders.emptyOrders:
      return {
        ...state,
        orders: [],
      }

    default:
      return state;
  }

}

export default ordersReducer;