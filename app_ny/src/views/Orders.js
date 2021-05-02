import React from 'react'
import { useSelector } from 'react-redux';
import Orders from '../components/Orders/Orders';
import OrdersNotLoggedIn from '../components/Orders/OrdersNotLoggedIn';

const OrdersView = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div id="order" className="d-flex margin-auto">
      
      {
      isAuth 
        ? <Orders />
        : <OrdersNotLoggedIn />
      }

    </div>
  )
}

export default OrdersView