import React from 'react';
import './App.css';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { Home } from './components/HomeComponent/Home';
import  ProtectedRoute  from './components/ProtectedComponent/ProtectedRoute';
import {Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import PageNotFound from './components/NotFound/NotFound';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import { CartProvider } from './context/CartContext';

function App() {
  return (
      <CartProvider>
    <div className="App">
     <Switch>
  <Route path="/login" component={LoginComponent} />
  <Route  exact
    path="/" 
    render={() => (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )}
  />
  <Route  exact
    path="/cart" 
    render={() => (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    )}
  />
  <Route exact
    path="/restaurants/:restaurantId" 
    render={() => (
      <ProtectedRoute>
        <RestaurantDetail />
      </ProtectedRoute>
    )} 
  />
  {/* Fallback route for undefined URLs */}
  <Route component={PageNotFound} />
</Switch>
    </div>
    </CartProvider>
  );
}

export default App;
