import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

export const fetchProduct = createAsyncThunk('product/get', async (id) => {
  try {
    let { data } = await axios('/data.json');
    let tempData = data.filter((item) => item.slug === id);
    return tempData;
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.isError = false;
      state.isLoading = true;
      state.product = [];
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    [fetchProduct.rejected]: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
