import axios from 'axios';
import { getToken } from './auth.js';

const API = axios.create({
  baseURL: 'https://gen-lock-server.onrender.com/api',
});

API.interceptors.request.use((req) => {
  const token = getToken();
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
