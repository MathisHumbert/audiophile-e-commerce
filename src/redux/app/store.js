import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import cartReducer from '../features/cartSlice';
import checkoutReducer from '../features/checkoutSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;
