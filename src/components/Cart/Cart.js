import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.cost * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div>
        <img src="/empty-cart.png" alt="empty cart" />
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div>
      {cart.map(item => (
        <div key={item.id} data-testid="cartItem">
         <img src={item.imageUrl} alt={item.name} className="cart-img" />

          <div>{item.name}</div>
          <div>₹{item.cost}</div>
          <button data-testid="decrement-quantity" onClick={() => decrementQuantity(item.id)}>-</button>
          <span data-testid="item-quantity">{item.quantity}</span>
          <button data-testid="increment-quantity" onClick={() => incrementQuantity(item.id)}>+</button>
        </div>
      ))}
      <div>
        Total Price: <span data-testid="total-price">₹{totalPrice}</span>
      </div>
    </div>
  );
};
export default Cart;
