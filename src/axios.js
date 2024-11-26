// src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/items', // Backend API URL
});

export default api;
