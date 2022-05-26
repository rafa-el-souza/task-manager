import axios from 'axios';

export const URL = '/task';

export const http = {
  OK: 200,
  CREATED: 201,
};

const api = axios.create({
  baseURL: `http://localhost:${process.env.PORT || '3001'}`,
  timeout: 1000,
});

export default api;
