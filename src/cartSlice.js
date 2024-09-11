import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find(p => p.id === id);
      if (product) {
        product.quantity = quantity;
      }
      calculateTotals(state);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      calculateTotals(state);
    },
  },
});

function calculateTotals(state) {
  state.subtotal = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  state.tax = state.subtotal * 0.12;
  state.total = state.subtotal + state.tax;
}

export const { addProduct, updateQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
