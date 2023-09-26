// camada de api
import axios from 'axios';

const endpoints = {
  production: 'http://api.puf.work',
  developent: 'http://localhost:3000',
  staging: 'http://stg.puf.work',
};

export const fetch = axios.create({
  baseURL: endpoints?.[process.env.API_END] || process.env.CUSTOM_URL || endpoints.production,
});
