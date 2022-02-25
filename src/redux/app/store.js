import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import cartReducer from '../features/cartSlice';
import checkoutReducer from '../features/checkoutSlice';
import asideReducer from '../features/asideSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    aside: asideReducer,
  },
});

export default store;
