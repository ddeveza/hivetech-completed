import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductApi from '../../api/productAPI';

export const addCart = createAsyncThunk(
  'cart/add',
  async (cartData, { rejectWithValue }) => {
    try {
      const response = await ProductApi.addCart(cartData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCarts = createAsyncThunk(
  'cart/getCarts',
  async (query, { rejectWithValue }) => {
    try {
      const response = await ProductApi.getCarts(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({ quantity, cartId }, { rejectWithValue }) => {
    try {
      const response = await ProductApi.updateCart(quantity, cartId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
