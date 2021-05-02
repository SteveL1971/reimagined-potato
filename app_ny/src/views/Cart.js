import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../components/Cart/Cart';
import CartEmpty from '../components/Cart/CartEmpty';
import CartNotLoggedIn from '../components/Cart/CartNotLoggedIn';

const CartView = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const counter = useSelector(state => state.cartReducer.cartCounter)

  return (
    <div className="pt-5 d-flex margin-auto">
      {
      isAuth 
        ? (counter>0)
          ? <Cart />
          : <CartEmpty />
        : <CartNotLoggedIn />
      }
    </div>
  )
}

export default CartView