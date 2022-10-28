import { createSelector } from '@reduxjs/toolkit';

const cart = (state) => state.cart.cart;

export const getCartQuantity = createSelector(
  [cart, (state, id) => id],
  (cart, id) => {
    const { quantity } = cart?.find((c) => c.product.id === id) ?? {
      quantity: 0,
    };

    return quantity;
  }
);

export const getCartByIdSelector = createSelector(
  [cart, (state, id) => id],
  (cart, id) => {
    const data = cart?.find((c) => c.product.id === id) ?? null;
    return data;
  }
);
export const getCartSelector = createSelector(cart, (cart) => cart);
