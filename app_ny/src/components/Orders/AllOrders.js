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
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  const NrOrders = (id) => {
    let counting=0
    orders.forEach(element => {
      if (element.customerId===id){
      counting++
      }
    });
    return counting;
  }

  // console.log(orders[2].customerId)
  // console.log(NrOrders(orders[2].customerId))


  const onlySeries = () => {
    return orders.map(order => order.customerId);
  }
  // console.log("onlyseries ", onlySeries())

  const uniqueSeries = () => {
      return onlySeries().filter((value, index, self) => self.indexOf(value) === index);
  }
  // console.log("uniqueseries ", uniqueSeries())

  const customers = () => {
    return uniqueSeries().map(order => (
      {
      customerId: order,
      nrOrders: NrOrders(order)
      }
    ));
  }
  // const trySeries = () => {
  //   return uniqueSeries().map(order => ([order,
  //     NrOrders(order)
  //   ]));
  // }

  // console.log(customers())

  // const hmmSeries = () => {
  //     return orders.filter((value, index, self) => self.indexOf(value) === index);
  // }
  // console.log(hmmSeries())

  // const customers = uniqueSeries()
  // console.log(customers)

  // const placedOrders = () => {
  //   return onlySeries().filter(x => x===customers[7]).length
  // }
  // console.log(placedOrders())
 

  return (
      <div id="orderMain" className="list card">
        <div className="box d-flex justify-content-between bg-white my-2 px-2">
          <AllOrderHeader />
          { 
            (orders.length===0) ? <OrdersEmpty />
            : isAuth ? customers() && customers().map(customer => <AllOrdersList key={customer.customerId} customer={customer} />) : <div /> 
          }
          </div>
      </div>
  )
}

export default Orders
