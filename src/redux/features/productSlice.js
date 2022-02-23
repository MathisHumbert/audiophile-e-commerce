import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: [],
  isLoading,
  isError,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
