import actiontypes from '../actiontypes';

let initState = {
    cartCounter: 0,
    cartProducts: [],
    totalPrice: 0
}

const cartReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().cart.increment:
      const plus = state.cartCounter + action.amount
      return {
        ...state,
        cartCounter: plus
      }

    case actiontypes().cart.decrement:
      const minus = state.cartCounter - action.amount
      return {
        ...state,
        cartCounter: minus
      }

    case actiontypes().cart.addCartProduct:
      const idSearch = (element) => element._id === action.product._id;
      const idIndex = (state.cartProducts.findIndex(idSearch));

      if(idIndex>-1) {
        const date = new Date()
        const formattedDate = date.toLocaleString()
        const updatedCartItem = {
          _id : action.product._id,
          name : action.product.name,
          series : action.product.series,
          number : action.product.number,
          price : action.product.price,
          amount : state.cartProducts[idIndex].amount + 1,
          img : action.product.img,
          desc: action.product.desc,
          created: action.product.created,
          modified: formattedDate
        }
        const totalPrice = state.totalPrice + Math.round(action.product.price*1.25)
        return {
          ...state,
          cartProducts: [...state.cartProducts.slice(0, idIndex), updatedCartItem, ...state.cartProducts.slice(idIndex + 1)],
          totalPrice
        }
       } else {
        const date = new Date()
        const formattedDate = date.toLocaleString()
        const newCartItem = {
          _id : action.product._id,
          name : action.product.name,
          series : action.product.series,
          number : action.product.number,
          price : action.product.price,
          amount : 1,
          img : action.product.img,
          desc: action.product.desc,
          created: formattedDate,
          modified: formattedDate
        }
        const totalPrice = state.totalPrice + Math.round(action.product.price*1.25)
        return {
          ...state,
          cartProducts: [...state.cartProducts, newCartItem],
          totalPrice
        }
      } 

    case actiontypes().cart.remCartProduct:
      const idSearch2 = (element) => element._id === action.product._id;
      const idIndex2 = (state.cartProducts.findIndex(idSearch2));

      if(state.cartProducts[idIndex2].amount > 1) {
        const date = new Date()
        const formattedDate = date.toLocaleString()
        const updatedCartItem = {
          _id : action.product._id,
          name : action.product.name,
          series : action.product.series,
          number : action.product.number,
          price : action.product.price,
          amount : action.product.amount - 1,
          img : action.product.img,
          desc: action.product.desc,
          created: action.product.created,
          modified: formattedDate
        }
        const totalPrice = state.totalPrice - Math.round(action.product.price*1.25)
        return {
          ...state,
          cartProducts: [...state.cartProducts.slice(0, idIndex2), updatedCartItem, ...state.cartProducts.slice(idIndex2 + 1)],
          totalPrice
        }
      } else {
        const totalPrice = state.totalPrice - Math.round(action.product.price*1.25)
        return {
          ...state,
          cartProducts: [...state.cartProducts.slice(0, idIndex2), ...state.cartProducts.slice(idIndex2 + 1)],
          totalPrice
        }
      }
    
    case actiontypes().cart.remCartRow:
      const idSearch3 = (element) => element._id === action.product._id;
      const idIndex3 = (state.cartProducts.findIndex(idSearch3));
      const totalPrice = state.totalPrice - (action.product.amount * Math.round(action.product.price*1.25))
      return {
        ...state,
        cartProducts: [...state.cartProducts.slice(0, idIndex3), ...state.cartProducts.slice(idIndex3 + 1)],
        totalPrice
      }

    case actiontypes().cart.sendOrder:
      return {
        ...state,
        cartCounter: 0,
        cartProducts: [],
        totalPrice: 0
      }

      case actiontypes().cart.emptyCart:
        return {
          ...state,
          cartCounter: 0,
          cartProducts: [],
          totalPrice: 0
        }
          
    default:
      return state
  }
}

export default cartReducer;