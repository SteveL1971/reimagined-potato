import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { increment, decrement, addCartProduct, remCartProduct, remCartRow } from '../../store/actions/cartActions'

const CartList = ({product}) => {

  const dispatch = useDispatch();

  const addOneToCart = () => {
    dispatch(increment(1))
    dispatch(addCartProduct(product))
  }

  const remOneFromCart = () => {
    dispatch(decrement(1))
    dispatch(remCartProduct(product))
  }

  const remAllFromCart = () => {
    dispatch(decrement(product.amount))
    dispatch(remCartRow(product))
  }

  return (
    <div id="cartItemTop">
      <div id="cartItem" className="cardBox bg-white mb-2 pt-2 row">
        <div className="col-8 px-1">
          <div className="row gradient-custom">
            <h4 className="col-3 align-text-center headerH4">Name:</h4>
            <p className="col-9 headerStyle headerP"> { product.name }</p>
          </div>

          <div className="row mt-2">
            <h5 className="col-3 orderH5">Number:</h5>
            <p className="col-9 orderP"> { product.number }</p>
          </div>
          <div className="row">
            <h5 className="col-3 orderH5">Series:</h5>
            <p className="col-9 orderP"> { product.series }</p>
          </div>
          <div className="row">
            <h5 className="col-3 orderH5">Price:</h5>
            <p className="col-9 orderP"> { product.price }kr <small>excl. VAT</small></p>
          </div>
          <div className="row">
            <h5 className="col-3 orderH5">Price:</h5>
            <p className="col-9 orderP">{ Math.round(product.price*1.25) }kr <small>incl. VAT</small></p>
          </div>
        </div>

        <div id="cartImgBox" className="imgBox col">
          <div id="cartButtons">
            <button onClick={ e => remAllFromCart() } className="btn btn-info"><i className="fas fa-trash-alt"></i></button>
            <button onClick={ e => remOneFromCart() } className="btn">-</button>
            <button onClick={ e => addOneToCart()} className="btn">+</button>
          </div>
          <div className="rightStyle">
            <Link id="cartImg" to={`/product/${product._id}`} className="card alignCenter">
              <div className="imgBox">
                <img src={ product.img } className="imgStyle" alt={ product.name }></img>
              </div>
            </Link>
            <div>
              <h5 className="text-center orderH5 mt-1">Amount: { product.amount }</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartList



