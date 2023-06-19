import axios from 'axios';
import { SERVER_URL } from '../constants/commonConstants';

const API_URL = SERVER_URL;

const Service = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: '*/*',
  },
});

Service.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.token = token;
  }
  return config;
});

Service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const err = error.response;
    console.log(err);
    return Promise.reject({
      status: err.status,
      message: err.data.message || '',
    });
  }
);

export default Service;
