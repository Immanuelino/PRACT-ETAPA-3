// src/store/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Otros reducers...
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
