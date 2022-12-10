import axios from 'axios';
import { BASE_URL } from './config';
import { store } from '../redux-toolkit';

const authApi = axios.create({
  baseURL: BASE_URL,
});

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((request) => {
  const token = store.getState()?.authSlice?.token;
  request.headers.Authorization = token ? `Bearer ${token}` : '';
  return request;
});

export { authApi, api };
