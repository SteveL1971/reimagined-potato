import React from 'react'
import OrdersRows from './OrdersRow';

const OrdersList = ({order}) => {
    return (
      <div id="orderList">
        <div className="box d-flex justify-content-between bg-white mb-2 px-2">
          <div className="orderHeader">
            <div className="row gradient-custom2 p-2">
              <h4 className="col-3 headerH4">Order:</h4>
              <p className="col-9 headerP"> #{ order.orderNumber }  </p>
              <h4 className="col-3 headerH4">Date:</h4>
              <p className="col-9 headerP"> { order.date }  </p>
              <h4 className="col-3 headerH4">Items:</h4>
              <p className="col-9 headerP"> { order.count }  </p>
              <h4 className="col-3 headerH4">Order value:</h4>
              <p className="col-9 headerP"> { order.totalPrice }kr incl. VAT </p>
            </div>
            { order.cart.map((product, index) => <OrdersRows key={index} product={product} />) }                
          </div>
        </div>
      </div>
  
    )
}

export default OrdersList
