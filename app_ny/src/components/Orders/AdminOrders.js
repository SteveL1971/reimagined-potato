import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminOrdersList from './AdminOrdersList';
import AdminOrderHeader from './AdminOrderHeader';
import OrdersEmpty from './OrdersEmpty';
import { getOrders } from '../../store/actions/ordersActions';
import { useParams, useHistory } from 'react-router-dom';

const Orders = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const id = useParams().id

  useEffect(() => {
    dispatch(getOrders(id));
  }, [dispatch])

  const orders = useSelector(state => state.ordersReducer.orders);
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
      <div id="orderMain" className="list card maxWidth">
        <div className="box d-flex justify-content-between bg-white px-2">
          
          { 
            (orders.length===0)
              ? <OrdersEmpty />
              : isAuth 
                ? <div>
                    <AdminOrderHeader/>
                    { orders && orders.map(order => <AdminOrdersList key={order.orderNumber} order={order} />) }
                  </div>
                : history.push('/')
          }
          </div>
      </div>
  )
}

export default Orders
