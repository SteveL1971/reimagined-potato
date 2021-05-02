import React from 'react'
import { useSelector } from 'react-redux';
import AllOrders from '../components/Orders/AllOrders';
import OrdersNotLoggedIn from '../components/Orders/OrdersNotLoggedIn';

const OrdersView = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className="d-flex margin-auto">
      {
      isAuth 
        ? <AllOrders />
        : <OrdersNotLoggedIn />
      }
    </div>
  )
}

export default OrdersView