import React from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartList from '../Cart/CartList';
import { Link, useHistory } from 'react-router-dom'
import { sendOrder } from '../../store/actions/cartActions'
import { getOrders } from '../../store/actions/ordersActions';
import gogo from '../../assets/img/gogo.jpg'

const Cart = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const orders = useSelector(state => state.ordersReducer.orders);
  const products = useSelector(state => state.cartReducer.cartProducts);
  const counter = useSelector(state => state.cartReducer.cartCounter)
  const totalPrice = useSelector(state => state.cartReducer.totalPrice)
  const loggedInUser = useSelector(state => state.auth.loggedInUser)
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  useEffect(() => {
    dispatch(getOrders(loggedInUser.id));
  }, [dispatch])

  const date = new Date()
  const formattedDate = date.toLocaleString()
  const saveOrder = () => {
    const payload = {
      customerId : loggedInUser.id, 
      date : formattedDate,
      count :counter,
      totalPrice,
      completed: false,
      cart : products,
      orderNumber: orders.length + 1, 
    }
    dispatch(sendOrder(payload))
    history.push('/ordercomplete')

  }



  return (
    <div className="margin-auto w-100 pt-3">
      { 
      isAuth?
        <div>
          { (counter>0) ?
            <div className="list pb-2">
              <div className="row pt-3 pb-3 px-2 px-sm-3 px-lg-4">
                <div className="col-9 row">
                    <p className="col-9 col-sm-4">Items in shopping cart: </p>
                    <p className="col-3 col-sm-8">{ counter }</p>
                    <p className="col-9 col-sm-4">Value of shopping cart: </p>
                    <p className="col-3 col-sm-8">{ totalPrice } kr</p>  
                </div>
                <div className="col-3 d-flex justify-content-end align-items-center">
                  <button onClick={ () => saveOrder()} className="btn btn-info">Save cart</button>
                </div>
              </div>
              { products && products.map(product => <CartList key={product._id} product={product} />) }
            </div>
            : <div />
          }
          { counter===0 ?
              <div>
                <div className="container style404 w-75">
                  <h2 className="text-center pb-3">Thank you for your order!</h2>
                  <p className="mb-3 text-center">We hope you will be completely satisfied with your purchase! You can see this order, together with all your previous transactions, in the orders section or by clicking <Link to="/orders">here</Link>.</p>
                  <img src={ gogo } className="imgStyle" alt="gogo" />
                </div>
              </div>
          : <div />
          }
        </div>
        : <div />
        }
    </div>
  )
}

export default Cart







