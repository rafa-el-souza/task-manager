import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.PORT || '3001'}`,
  timeout: 1000,
});

export default api;
