import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductApi from '../../api/productAPI';

export const getCategories = createAsyncThunk(
  'products/categories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProductApi.getCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (query, { rejectWithValue }) => {
    try {
      const response = await ProductApi.getProducts(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const changePage = createAsyncThunk(
  'products/changePage',
  async (url, { rejectWithValue }) => {
    try {
      const response = await ProductApi.changePage(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
