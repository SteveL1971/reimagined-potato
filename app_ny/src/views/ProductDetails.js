import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, setProduct } from '../store/actions/productsActions';
import { increment, addCartProduct } from '../store/actions/cartActions'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const id = useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id))
    return () => {
      dispatch(setProduct(null))
    }
  }, [dispatch, id])

  const addToCart = (product) => {
    dispatch(increment(1))
    dispatch(addCartProduct(product))
  }

  const product = useSelector(state => state.productsReducer.product);
  const loading = useSelector(state => state.productsReducer.loading);

  const _product = ( product && 
    <div className="detailsCard">
      <div className="textStyle d-flex justify-content-between">
        <div className="textLayout mb-2">
          <div className="row mx-2 gradient-custom">
            <h4 className="col-3 px-2 align-text-center headerH4">Name:</h4>
            <p className="col-9 headerP"> { product.name }</p>
          </div>
          <div className="row mt-3 mx-2">
            <h5 className="col-3 textH5">Id:</h5>
            <p className="col-9 textP"> { product._id }</p>
          </div>
          <div className="row mx-2">
            <h5 className="col-3 textH5">Number:</h5>
            <p className="col-9 textP"> #{ product.number }</p>
          </div>
          <div className="row mx-2">
            <h5 className="col-3 textH5">Series:</h5>
            <p className="col-9 textP"> { product.series }</p>
          </div>
          <div className="row mx-2">
            <h5 className="col-3 textH5">Price:</h5>
            <p className="col-9 textP"> { product.price }kr <span className="smallText">excl. VAT</span></p>
          </div>
          <div className="row mx-2 mb-3">
            <h5 className="col-3 textH5">Price:</h5>
            <p className="col-9 textP"> { Math.round(product.price*1.25) }kr <span className="smallText">incl. VAT</span></p>
          </div>
          <div className="mt-2 mx-2 py-2 descStyle">
            <h5 className="textH5 descTextStyle pb-2">Description: </h5>
            <p className="textP">{ product.desc }</p>  
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <img src={ product.img } className="imgStyle" alt="product.name"></img>
        </div>
        <div className="d-flex justify-content-center my-3">
          <button onClick={e => addToCart(product)} className="btn btn-info bg-info"><i className="fas fa-cart-plus"></i></button>
        </div> 
      </div>
    </div>
  )

  return (
    <div>
      { _product }
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default ProductDetails
