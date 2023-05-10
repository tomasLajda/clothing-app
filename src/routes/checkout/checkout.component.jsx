import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../../components/cart-item/cart-item-component';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { name, quantity, price, id } = cartItem;
        return (
          <div key={id}>
            <span>{name}</span>
            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
            <span>{quantity}</span>
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
            <span>{price}</span>
            <span>remove</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
