import axios from 'axios';
import { getToken } from '../utils/Storage';
import { BASE_API_URL } from '../config/ApiConfig';

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export function setToken(token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

getToken().then((token) => {
  setToken(token);
});
