import React from 'react';
import './App.css';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { Home } from './components/HomeComponent/Home';
import { ProtectedRoute } from './components/ProtectedComponent/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import PageNotFound from './components/NotFound/NotFound';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import { CartProvider } from './context/CartContext';

function App() {
  return (
      <CartProvider>
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/restaurants/:restaurantId" element={<ProtectedRoute><RestaurantDetail /></ProtectedRoute>} />
        {/* Fallback route for undefined URLs */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
