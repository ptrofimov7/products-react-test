import axios from 'axios';

const baseURL =
  process.env.REACT_APP_API_URL ||
  'https://dummyjson.com/';

export const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});
