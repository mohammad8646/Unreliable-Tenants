import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Your backend
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/jason',
    'Access-Control-Allow-Origin':'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export default api;
