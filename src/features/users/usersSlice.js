import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UsersAPI from '../../api/userAPI';
const initialState = {
  users: null,
  loading: false,
  error: null,
  success: false,
};

export const signup = createAsyncThunk(
  'users/signup',
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await UsersAPI.signup(data);
      return response.data;
    } catch (error) {
      if (!error.response.data) {
        return rejectWithValue(error.response.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  'users/signin',
  async (data, { rejectWithValue }) => {
    try {
      const response = await UsersAPI.signin(data);
      return response.data;
    } catch (error) {
      if (!error.response.data) {
        return rejectWithValue(error.response.message);
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUsersError: (state) => {
      state.error = null;
    },
    signout: (state) => {
      localStorage.clear();
      state.users = null;
      state.success = false;
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      localStorage.setItem('users', JSON.stringify(payload));
      state.users = payload;
    });
    builder.addCase(signup.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.users = payload;
    });
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      localStorage.setItem('users', JSON.stringify(payload));
      state.users = payload;
    });
    builder.addCase(signin.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.users = payload;
    });
    builder.addCase(signin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { clearUsersError, signout } = usersSlice.actions;

export default usersSlice.reducer;
