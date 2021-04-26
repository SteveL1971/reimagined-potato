import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { getProducts } from '../store/actions/productsActions';

const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const products = useSelector(state => state.productsReducer.products);
  const loading = useSelector(state => state.productsReducer.loading);
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className="grid">
      {loading && !products && <p>Loading...</p>}
      {isAuth ? products && products.map(product => <Product key={product._id} product={product} />) : <div />}
    </div>
  )
}

export default Products
