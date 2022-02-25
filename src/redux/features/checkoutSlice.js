import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkout: {
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    emoney: true,
    emoneyNumber: '',
    emoneyPin: '',
  },
  checkoutCart: [],
  checkoutCartTotal: 0,
  isCheckoutOpen: false,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    onFormChange: (state, action) => {
      const { id, value } = action.payload;
      state.checkout[id] = value;
    },
    resetForm: () => initialState,
    addCartToCheckout: (state, action) => {
      state.isCheckoutOpen = true;
      state.checkoutCart = action.payload.cart;
      state.checkoutCartTotal = action.payload.total;
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false;
    },
  },
});

export const { onFormChange, resetForm, addCartToCheckout, closeCheckout } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
