import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import OrdersList from './OrdersList';
import AdminOrderHeader from './AdminOrderHeader';
import OrdersEmpty from './OrdersEmpty';
import { getOrders } from '../../store/actions/ordersActions';
import { useParams } from 'react-router-dom';

const Orders = () => {

  const dispatch = useDispatch();
  const id = useParams().id

  useEffect(() => {
    dispatch(getOrders(id));
  }, [dispatch])

  const orders = useSelector(state => state.ordersReducer.orders);
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
      <div id="orderMain" className="list card">
        <div className="box d-flex justify-content-between bg-white my-2 px-2">
          <AdminOrderHeader />
          { 
            (orders.length===0) ? <OrdersEmpty />
            : isAuth ? orders && orders.map(order => <OrdersList key={order.orderNumber} order={order} />) : <div /> 
          }
          </div>
      </div>
  )
}

export default Orders
