import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { getProducts } from '../store/actions/productsActions';
import { useHistory } from 'react-router-dom';

const Products = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const products = useSelector(state => state.productsReducer.products);
  const loading = useSelector(state => state.productsReducer.loading);
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className="maxWidth margin-auto grid">
      {loading && !products && <p>Loading...</p>}
      {isAuth ? products && products.map(product => <Product key={product._id} product={product} />) : history.push('/')}
    </div>
  )
}

export default Products
