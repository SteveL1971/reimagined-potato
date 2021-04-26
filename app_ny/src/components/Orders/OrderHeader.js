// import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/actions/ordersActions';

const OrderHeader = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getOrders(loggedInUser.id));
    }, [dispatch])

    const loggedInUser = useSelector(state => state.auth.loggedInUser)
    const orders = useSelector(state => state.ordersReducer.orders);

    return (
        <div className="textStyle">
            <div className="row gradient-custom p-2">
                <h4 className="col-3 headerH4">id:</h4>
                <p className="col-9 headerP"> { loggedInUser.id } </p>
                <h4 className="col-3 headerH4">Name:</h4>
                <p className="col-9 headerP"> { loggedInUser.firstName } { loggedInUser.lastName }  </p>
                <h4 className="col-3 headerH4">Email:</h4>
                <p className="col-9 headerP"> { loggedInUser.email }  </p>
                <h4 className="col-3 headerH4">Orders:</h4>
                <p className="col-9 headerP"> { orders.length }  </p>
            </div>
        </div>
    )
}

export default OrderHeader
