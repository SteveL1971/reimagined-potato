import React from 'react'
import { useSelector } from 'react-redux';
import Orders from '../components/Orders/Orders';
import AllOrders from '../components/Orders/AllOrders';
import OrdersNotLoggedIn from '../components/Orders/OrdersNotLoggedIn';

const OrdersView = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div id="order" className="pt-5">
      
      {/* {
      isAuth 
        ? <Orders />
        : <OrdersNotLoggedIn />
      } */}

      <AllOrders />
    </div>
  )
}

export default OrdersView