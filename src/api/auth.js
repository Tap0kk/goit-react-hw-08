import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const registerUser = async formData => {
  const { data } = await authInstance.post('/users/signup', formData);

  return data;
};

export const loginUser = async userData => {
  const { data } = await authInstance.post('/users/login', userData);

  return data;
};

export const getCurrentUser = async () => {
  const { data } = await authInstance.get('/users/current');

  return data;
};

export const logoutUser = async () => {
  const { data } = await authInstance.post('/users/logout');

  return data;
};
