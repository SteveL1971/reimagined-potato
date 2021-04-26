import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { increment, addCartProduct } from '../store/actions/cartActions'

const Product = ({product}) => {

  const dispatch = useDispatch();
  
  const addOneToCart = () => {
    dispatch(increment(1))
    dispatch(addCartProduct(product))
  }

  const catFilter = e => {
    e.preventDefault();
    console.log(product.series)
  }

  return (
    <div className="post_">

      <div className="margin-auto d-flex justify-content-center">

        <div className="cardBox card">
          <div className="textStyle">
            <div className="row gradient-custom">
              <h4 className="col-4 px-1 align-text-center headerH4">Name:</h4>
              <p className="col-8 headerP"> { product.name }</p>
            </div>
            <div className="row mt-2">
              <h5 className="col-4 textH5 px-1">Number:</h5>
              <p className="col-8 textP"> { product.number }</p>
            </div>
            <div className="row">
              <h5 className="col-4 textH5 px-1">Series:</h5>
              <a href="/#" onClick={e => catFilter(e)} className="col-8 margin-auto">{ product.series }</a>
            </div>
            <div className="row">
              <h5 className="col-4 textH5 px-1">Price:</h5>
              <p className="col-8 textP"> {  Math.round(product.price*1.25) }kr <span className="smallText">incl. VAT</span></p>
            </div>
            <div className="row">
              <h5 className="col-12 textH5 px-1">Description:</h5>
              <p className="col-12 descP px-1">{ product.desc.slice(0, 200) }</p>
            </div>
          </div>
          <Link to={`/product/${product._id}`}>
            <div className="imgBox">
              <img src={ product.img } className="imgStyle" alt="product.name"></img>
            </div>
          </Link>
          <div className="d-flex justify-content-center my-3">
          <button onClick={e => addOneToCart()} className="btn btn-info bg-info"><i className="fas fa-cart-plus"></i></button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Product
