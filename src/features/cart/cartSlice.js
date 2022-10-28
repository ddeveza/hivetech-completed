import { createSlice } from '@reduxjs/toolkit';
import { addCart, checkoutCart, getCarts, updateCart } from './asynThunk';

const initialState = {
  cart: null,
  loading: false,
  error: null,
  success: false,
};

const cartSlice = createSlice({
  name: initialState,
  initialState,
  reducers: {
    removeCart: (state, { payload }) => {
      const newCart = state.cart?.filter((c) => c.id !== payload) ?? [];
      state.cart = newCart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCart.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.cart = [...state.cart, payload];
    });
    builder.addCase(addCart.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(addCart.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getCarts.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.cart = payload;
    });
    builder.addCase(getCarts.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getCarts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(updateCart.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      /* update the cart state here */
      const newCart = state.cart.map((c) => {
        if (c.id === payload.id) {
          return {
            ...c,
            quantity: payload.quantity,
          };
        }
        return c;
      });

      state.cart = newCart;
    });
    builder.addCase(updateCart.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(updateCart.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(checkoutCart.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(checkoutCart.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(checkoutCart.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { removeCart } = cartSlice.actions;

export default cartSlice.reducer;
