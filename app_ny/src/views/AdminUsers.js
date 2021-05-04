import React from 'react'
import { useSelector } from 'react-redux';
import AllUsers from '../components/Users/AllUsers';
import OrdersNotLoggedIn from '../components/Orders/OrdersNotLoggedIn';

const OrdersView = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className="d-flex margin-auto">
      {
      isAuth 
        ? <AllUsers />
        : <OrdersNotLoggedIn />
      }
    </div>
  )
}

export default OrdersView