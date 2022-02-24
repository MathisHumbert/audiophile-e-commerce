import { createSlice } from '@reduxjs/toolkit';

const localCart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  cart: localCart,
  amount: 0,
  total: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      let itemAlreadyExists = false;
      let tempCart = state.cart;

      state.cart.forEach((item) => {
        if (item.id === newItem.id) {
          itemAlreadyExists = true;
        }
      });

      if (itemAlreadyExists) {
        tempCart.map((item) => {
          if (item.id === newItem.id) {
            item.amount += newItem.amount;
          }
        });
      } else {
        tempCart.push(newItem);
      }

      state.cart = tempCart;
      state.isCartOpen = true;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { openCart, closeCart, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
