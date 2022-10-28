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

export const totalCartItemsSelector = createSelector(cart, (cart) => {
  if (cart.length > 0) {
    const { totalPrice, totalCartItems } = cart.reduce(
      (acc, curr) => {
        const totalCartItems = acc.totalCartItems + curr.quantity;
        const totalPrice = acc.totalPrice + curr.total_price * curr.quantity;

        return { totalCartItems, totalPrice };
      },
      {
        totalCartItems: 0,
        totalPrice: 0,
      }
    );
    return { totalPrice, totalCartItems };
  } else {
    return {
      totalCartItems: 0,
      totalPrice: 0,
    };
  }
});
