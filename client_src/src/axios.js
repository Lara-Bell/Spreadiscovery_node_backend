import axiosBase from 'axios';

const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
  headers: {
    'ContentType': 'application/json',
    'Authorization': process.env.REACT_APP_API_ACCESS_TOKEN
  },
  responseType: 'json'
});

export default axios;