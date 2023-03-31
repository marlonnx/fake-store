import httpClient from '../configs/axios_client';
import { User } from '../models/user';

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const response = await httpClient.post('/auth/login', { email: email, password });
    return response.data['access_token'];
  } catch (error: any) {
    throw error.message ?? 'Ocorreu um erro nesta solicitação, tente novamente';
  }
};
export const getCurrentUser = async (): Promise<User> => {
  try {
    const response = await httpClient.get('/auth/profile');
    return response.data;
  } catch (error: any) {
    throw error.message ?? 'Ocorreu um erro nesta solicitação, tente novamente';
  }
};
