import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4001/api/auth';

export const login = async (emailOrPhone: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { emailOrPhone, password });
  return response.data; // This will include the JWT token
};

export const register = async (email?: string, phoneNumber?: string, password?: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, phoneNumber, password });
  return response.data;
};
