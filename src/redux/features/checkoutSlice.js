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
  },
});

export const { onFormChange } = checkoutSlice.actions;
export default checkoutSlice.reducer;
