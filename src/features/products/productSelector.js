import { createSelector } from '@reduxjs/toolkit';

const categories = (state) => state.products.categories;
const loading = (state) => state.products;
const products = (state) => state.products.products;

export const categoriesSelector = createSelector(
  categories,
  (categories) => categories
);

export const productLoadingSelector = createSelector(
  loading,
  ({ loading, error, success }) => ({ loading, error, success })
);

export const productsSelector = createSelector(
  products,
  (products) => products?.results ?? []
);

export const totalPageSelector = createSelector(
  products,
  (products) => products?.total_pages
);
export const currPageSelector = createSelector(
  products,
  (products) => products?.current
);
export const activeCategorySelector = createSelector(
  (state) => state.products.activeCategory,
  (activeCategory) => {
    if (activeCategory) {
      return activeCategory;
    }
    return '';
  }
);

export const nextPageSelector = createSelector(
  products,
  (products) => products?.next
);
export const prevPageSelector = createSelector(
  products,
  (products) => products?.previous
);
export const querySelector = createSelector(
  products,
  (products) => products?.query
);
