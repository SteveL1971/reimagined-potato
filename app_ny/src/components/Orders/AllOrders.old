import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllOrdersList from './AllOrdersList';
import AllOrderHeader from './AllOrderHeader';
import OrdersEmpty from './OrdersEmpty';
import { getAllOrders } from '../../store/actions/ordersActions';

const Orders = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch])

  const orders = useSelector(state => state.ordersReducer.allOrders);
  const loggedInUser = useSelector(state => state.auth.loggedInUser)

  const NrOrders = (id) => {
    let counting=0
    orders.forEach(element => {
      if (element.customerId===id){
      counting++
      }
    });
    return counting;
  }

  const onlySeries = () => {
    return orders.map(order => order.customerId);
  }

  const uniqueSeries = () => {
      return onlySeries().filter((value, index, self) => self.indexOf(value) === index);
  }
  
  const customers = () => {
    return uniqueSeries().map(order => (
      {
      customerId: order,
      nrOrders: NrOrders(order)
      }
    ));
  }

  return (
      <div id="orderMain" className="list card maxWidth">
        <div className="box d-flex justify-content-between bg-white px-2">
          <AllOrderHeader />
          { 
            (orders.length===0) ? <OrdersEmpty />
            : loggedInUser.admin ? customers() && customers().map(customer => <AllOrdersList key={customer.customerId} customer={customer} />) : <div /> 
          }
          </div>
      </div>
  )
}

export default Orders
