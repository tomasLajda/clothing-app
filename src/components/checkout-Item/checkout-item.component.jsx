const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <span className="name">{name}</span>
      <span>decrement</span>
      <span>{quantity}</span>
      <span>increment</span>
      <span className="price">{price}</span>
      <span>remove</span>
    </div>
  );
};

export default CartItem;
