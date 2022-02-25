import { createSlice } from '@reduxjs/toolkit';
import { preventScroll } from '../../utils/helpers';

const initialState = {
  isMenuOpen: false,
  isCartOpen: false,
  isCheckoutOpen: false,
};

const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleMenuAside: (state) => {
      state.isCartOpen = false;
      state.isMenuOpen = !state.isMenuOpen;

      preventScroll(state.isMenuOpen);
    },
    toggleCartAside: (state) => {
      state.isMenuOpen = false;
      state.isCartOpen = !state.isCartOpen;

      preventScroll(state.isCartOpen);
    },
    toggleCheckoutAside: (state) => {
      state.isCheckoutOpen = !state.isCheckoutOpen;

      preventScroll(state.isCheckoutOpen);
    },
  },
});

export const { toggleCartAside, toggleCheckoutAside, toggleMenuAside } =
  asideSlice.actions;
export default asideSlice.reducer;
