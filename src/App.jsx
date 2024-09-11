
import React from 'react';
import Products from './Products';
import Cart from './Cart';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="p-8">
        <h1>Shopping Cart</h1>
        <Products />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
