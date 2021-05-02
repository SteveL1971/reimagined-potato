import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { getProducts } from '../store/actions/productsActions';
import OrdersNotLoggedIn from '../components/Orders/OrdersNotLoggedIn';

const Products = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const products = useSelector(state => state.productsReducer.products);
  const loading = useSelector(state => state.productsReducer.loading);
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  

  return (
    <div>
      {loading && !products && <p>Loading...</p>}
      {
      isAuth 
        ? 
        <div className="maxWidth margin-auto grid">
        { products && products.map(product => <Product key={product._id} product={product} />) } 
        </div>
        : 
        <div className="maxWidth margin-auto d-flex">
        <OrdersNotLoggedIn />
        </div>
      }
    </div>
  )
}

export default Products
