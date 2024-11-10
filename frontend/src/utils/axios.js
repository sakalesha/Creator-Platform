import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',  // your backend URL
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

export default instance;
