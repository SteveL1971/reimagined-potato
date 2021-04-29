import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import OrdersList from './OrdersList';
import OrderHeader from './OrderHeader';
import OrdersEmpty from './OrdersEmpty';
import { getOrders } from '../../store/actions/ordersActions';

const Orders = () => {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.ordersReducer.orders);
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const loggedInUser = useSelector(state => state.auth.loggedInUser)

  useEffect(() => {
    dispatch(getOrders(loggedInUser.id));
  }, [dispatch])

  return (
      <div id="orderMain" className="list card">
        <div className="box d-flex justify-content-between bg-white my-2 px-2">
          <OrderHeader />
          { 
            (orders.length===0) ? <OrdersEmpty />
            : isAuth ? orders && orders.map(order => <OrdersList key={order.orderNumber} order={order} />) : <div /> 
          }
          </div>
      </div>
  )
}

export default Orders
