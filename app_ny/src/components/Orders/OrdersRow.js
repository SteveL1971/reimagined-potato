import React from 'react'
import { Link } from 'react-router-dom'

const OrdersRows = ({product}) => {
    return (
      <div id="orderRows" className="row">
        <div className="row gradient-custom px-2">
          <h4 className="col-3 nameH4">Name:</h4>
          <p className="col-9 nameP"> { product.name }</p> 
        </div>  
        <div className="col-9 p-2">
          <div className="row">
            <h5 className="col-4 orderH5">Number:</h5>
            <p className="col-8 orderP"> #{ product.number }</p>
          </div>
          <div className="row">
            <h5 className="col-4 orderH5 ">Series:</h5>
            <p className="col-8 orderP"> { product.series }</p>
          </div>
          <div className="row">
            <div className="row">
              <h5 className="col-4 orderH5">Amount:</h5>
              <p className="col-8 orderP"> { product.amount }</p>
            </div>
            <div className="col row">
            </div>
          </div>
          <div className="row">
            <div className="row">
              <h5 className="col-4 orderH5">Price each:</h5>
              <p className="col-8 orderP"> { Math.round(product.price*1.2)}kr incl. VAT</p>
            </div>
            <div className="row">
              <h5 className="col-4 orderH5">Total price:</h5>
              <p className="col-8 orderP">{ (Math.round(product.price*1.2))*product.amount }kr incl. VAT</p>
            </div>
          </div>
        </div>
        <Link to={`/product/${product._id}`} className="col-3 alignment">
          <div className="orderImgBox">
              <img src= { product.img } className="orderImgStyle" alt="product.name" />
          </div>
        </Link>
      </div>
    ) 
}

export default OrdersRows
