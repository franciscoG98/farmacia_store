import api from './api';
import { LoginCredentials, AuthResponse, RegisterData } from '@/types/auth';

export const customerAuth = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post('/api/auth/local', credentials);
    return response.data;
  },

  async getMe() {
    const response = await api.get('/api/users/me?populate=role');
    return response.data;
  },

  logout() {
    localStorage.removeItem('customerToken');
    localStorage.removeItem('customer');
  },

  getCustomerToken() {
    return localStorage.getItem('customerToken');
  },

  getUser() {
    const user = localStorage.getItem('customer');
    return user ? JSON.parse(user) : null;
  },

  // @fix: any type
  setAuth(token: string, user: any) {
    localStorage.setItem('customerToken', token);
    localStorage.setItem('customer', JSON.stringify(user));
  },

  async register(data: RegisterData) {
    const response = await api.post('/api/auth/local/register', data);
    return response.data;
  }
};