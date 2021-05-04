import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import OrdersRows from './OrdersRow';
import { getCompleted } from '../../store/actions/ordersActions';

const OrdersList = ({order}) => {

  const userDetails = useSelector(state => state.auth.userDetails);
  const admin = useSelector(state => state.auth.loggedInUser.admin)
  const dispatch = useDispatch();

  const toggleCompleted = () => {
    order.completed = !order.completed
    const orderDetails={
      customerId: userDetails.userId,
      orderNumber: order.orderNumber,
      completed: order.completed
    }
    dispatch(getCompleted(orderDetails));
  }

    return (
      <div id="orderList">
        <div className="box d-flex justify-content-between bg-white mb-2 px-2">
          <div className="orderHeader">
            <div className=" justify-content-between align-items-center">
              <div className="row gradient-custom2 p-2">
                <h4 className="col-3 orderH4">Order:</h4>
                <p className="col-9 orderP"> #{ order.orderNumber }  </p>
                <h4 className="col-3 orderH4">Date:</h4>
                <p className="col-9 orderP"> { order.date }  </p>
                <h4 className="col-3 orderH4">Items:</h4>
                <p className="col-9 orderP"> { order.count }  </p>
                <h4 className="col-3 orderH4">Order value:</h4>
                <p className="col-9 orderP"> { order.totalPrice }kr incl. VAT </p>
                <h4 className="col-3 orderH4">Order status:</h4>
                <p className="col-9 orderP"> { order.completed ? "dispatched":"being processed" }</p>
              </div>
              <div className="d-flex justify-content-center">
                {
                admin
                  ? <button id="btnComplete" onClick={e => toggleCompleted()} className={`btn py-1 my-2 ${order.completed ? "btnGreen" : "btnRed"}`}>{order.completed ? "Change back to unsent" : "Dispatch Order"}</button>
                  : <div />
                }
              </div>
            </div>
            { order.cart.map((product, index) => <OrdersRows key={index} product={product} />) }                
          </div>
        </div>
      </div>
    )

}

export default OrdersList
