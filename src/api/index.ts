
import axios from 'axios';

export const registerUserApi = (user: any) => axios.post('/api/auth/register', user);

export const loginUserApi = (user: any) => axios.post('/api/auth/login', user);

export const forgotPasswordApi = (email: any) => axios.post('/api/auth/forgot-password', email);

export const loadUserApi = () => axios.get('/api/users/load');