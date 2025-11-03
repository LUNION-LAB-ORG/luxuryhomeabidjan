import { Api } from 'ak-api-http';

export const api = new Api({
  baseUrl: process.env.API_BASE_URL || 'http://localhost:8081/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  maxRetries: 3,
  retryDelay: 1000,
  enableAuth: false,
  debug: process.env.NODE_ENV != 'production', // Enable debug mode in non-production environments
});