import React from 'react'
// import OrdersRows from './OrdersRow';
import { Link } from 'react-router-dom';

const OrdersList = ({customer}) => {
    return (
      <Link to={`/adminorders/${customer.customerId}`}>
        <div id="allOrderList">
          <div className="box d-flex justify-content-between bg-white mb-2 px-2">
            <div className="allOrderHeader">
              <div className="row gradient-custom2 p-1">
                <h4 className="col-1 headerH4">customer id:</h4>
                <p className="col-2 headerP"> #{ customer.customerId }</p>
                <h4 className="col-1 headerH4">Orders:</h4>
                <p className="col-1 headerP"> { customer.nrOrders }  </p>
                <div className="col" />
              </div>
              {/* { order.cart.map((product, index) => <OrdersRows key={index} product={product} />) }                 */}
            </div>
          </div>
        </div>
      </Link>
  
    )
}

export default OrdersList
