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
      console.log(action.payload);
      state.checkoutCart = action.payload.cart;
      state.checkoutCartTotal = action.payload.total;
    },
  },
});

export const { onFormChange, resetForm, addCartToCheckout } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
