import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  clearToken,
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  setToken,
} from '../../api/auth';

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const data = await registerUser(formData);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const data = await loginUser(userData);
      setToken(data.token);

      return data;
    } catch (error) {
      console.log(error);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    try {
      setToken(token);

      const data = await getCurrentUser(_);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const data = await logoutUser(_);

    clearToken();

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
