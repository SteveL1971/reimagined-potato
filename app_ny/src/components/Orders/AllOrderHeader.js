// import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
// import { getAllOrders } from '../../store/actions/ordersActions';

const OrderHeader = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getAllOrders(loggedInUser.id));
    // }, [dispatch])

    const loggedInUser = useSelector(state => state.auth.loggedInUser)
    const orders = useSelector(state => state.ordersReducer.allOrders);

    const onlySeries = () => {
        return orders.map(order => order.customerId);
    }
    const uniqueSeries = () => {
        return onlySeries().filter((value, index, self) => self.indexOf(value) === index);
    }

    return (
        <div id="allOrderHeader" className="textStyle">
            <div className="row gradient-custom3 p-2">
                {/* <h4 className="col-3 headerH4">id:</h4>
                <p className="col-9 headerP">{ loggedInUser.id }</p>
                <h4 className="col-3 headerH4">Name:</h4>
                <p className="col-9 headerP">{ loggedInUser.firstName } { loggedInUser.lastName }</p> */}
                <h4 className="col-3 headerH4">Admin ordermeny:</h4>
                <p className="col-9 headerP"> </p>
                <h4 className="col-3 headerH4">Customers</h4>
                <p className="col-9 headerP">{ uniqueSeries().length }</p>
                <h4 className="col-3 headerH4">Total orders:</h4>
                <p className="col-9 headerP">{ orders.length }</p>
            </div>
        </div>
    )
}

export default OrderHeader
