import axios from 'axios';
import { BASE_URL } from './config';
import { store } from '../redux-toolkit';
import {
  startLoading,
  stopLoading,
} from '../redux-toolkit/slices/loadingSlice';

const authApi = axios.create({
  baseURL: BASE_URL,
});

const api = axios.create({
  baseURL: BASE_URL,
});

const apiN = axios.create({
  baseURL: BASE_URL,
});

authApi.interceptors.request.use(
  (req) => {
    store.dispatch(startLoading());
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

authApi.interceptors.response.use(
  (res) => {
    store.dispatch(stopLoading());
    return res;
  },
  (err) => {
    store.dispatch(stopLoading());
    return Promise.reject(err);
  }
);

api.interceptors.request.use((request) => {
  store.dispatch(startLoading());
  const token = store.getState().authSlice.token;
  request.headers.Authorization = token ? `Bearer ${token}` : '';
  return request;
});

api.interceptors.response.use(
  (response) => {
    store.dispatch(stopLoading());
    return response;
  },
  (err) => {
    store.dispatch(stopLoading());
    return Promise.reject(err);
  }
);

apiN.interceptors.request.use(
  (req) => {
    const token = store.getState().auth.token;
    req.headers.Authorization = token ? `Bearer ${token}` : '';
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

apiN.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { authApi, api };
