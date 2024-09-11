import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeProduct } from './cartSlice';

const Cart = () => {
  const { products, subtotal, tax, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {products.map(({ id, title, price, quantity }) => (
        <div key={id} className="border p-4 flex justify-between">
          <span>{title}</span>
          <input
            type="number"
            value={quantity}
            onChange={(e) => dispatch(updateQuantity({ id, quantity: +e.target.value }))}
          />
          <button onClick={() => dispatch(removeProduct(id))}>
            Remove
          </button>
          <span>${(price * quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="mt-4">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (12%): ${tax.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
