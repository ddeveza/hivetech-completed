import { createSlice } from '@reduxjs/toolkit';
import { changePage, getCategories, getProducts } from './asyncThunks';

const initialState = {
  categories: [],
  products: null,
  query: null,
  loading: false,
  success: false,
  error: null,
  activeCategory: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveCategories: (state, { payload }) => {
      state.activeCategory = payload;
    },
    saveQuery: (state, { payload }) => {
      state.query = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.categories = payload;
    });
    builder.addCase(getCategories.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.success = false;
      state.categories = payload;
    });
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.loading = false;

      state.error = payload;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.products = payload;
    });
    builder.addCase(getProducts.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.products = payload;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(changePage.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.products = payload;
    });
    builder.addCase(changePage.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.success = false;
      state.products = payload;
    });
    builder.addCase(changePage.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setActiveCategories, saveQuery } = productsSlice.actions;

export default productsSlice.reducer;
