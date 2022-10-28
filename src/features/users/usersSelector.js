import { createSelector } from '@reduxjs/toolkit';

const users = (state) => state.users.categories;
const loading = (state) => state.users;

export const usersTokenSelector = createSelector(users, ({ token }) => token);

export const usersLoadingSelector = createSelector(
  loading,
  ({ loading, error, success }) => ({ loading, error, success })
);
