import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './routes/ProtectedRoute';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Orders from './views/Orders';
import AdminOrders from './components/Orders/AdminOrders';
import AdminAllOrders from './views/AdminOrders';
import Products from './views/Products';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import CartView from './views/Cart';
import ProductDetails from './views/ProductDetails';
import Create from './views/Create';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/adminorders/:id" component={AdminOrders} />
          <Route exact path="/adminorders/" component={AdminAllOrders} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart" component={CartView} />
          <ProtectedRoute exact path="/create" component={Create} />
          <Route exact path="/product/:id" component={ProductDetails} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
