// import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/actions/ordersActions';
import { getUserDetails } from '../../store/actions/authenticate';
import { useParams } from 'react-router-dom';

const AdminOrderHeader = () => {

    const dispatch = useDispatch();
    const id = useParams().id

    useEffect(() => {
      dispatch(getOrders(id));
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserDetails(id));
      }, [dispatch])

    // const loggedInUser = useSelector(state => state.auth.loggedInUser)
    const orders = useSelector(state => state.ordersReducer.orders);
    const userDetails = useSelector(state => state.auth.userDetails);

    // console.log(userDetails)

    return (
        <div className="textStyle">
            <div className="row gradient-custom3 p-2">
                <h4 className="col-3 headerH4">id:</h4>
                <p className="col-9 headerP"> { id } </p>
                <h4 className="col-3 headerH4">Name:</h4>
                <p className="col-9 headerP"> { userDetails.firstName } { userDetails.lastName }  </p>
                <h4 className="col-3 headerH4">Email:</h4>
                <p className="col-9 headerP"> { userDetails.email }  </p>
                <h4 className="col-3 headerH4">Orders:</h4>
                <p className="col-9 headerP"> { orders.length }  </p>
            </div>
        </div>
    )
}

export default AdminOrderHeader
