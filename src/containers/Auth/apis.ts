import apiClient from 'apis/apiClient';
import {
  // LOGIN,
  // GET_CURRENT_USER,
  LOGOUT,
  MOCK_LOGIN,
  MOCK_USER_INFO,
} from 'constants/apiUrl';
// import { loginData } from './model';

export const login = (payload: any): any =>
  apiClient
    .get(MOCK_LOGIN, payload)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);
      throw err;
    });

export const logout = (): any =>
  apiClient
    .post(LOGOUT, {})
    .then((response) => response)
    .catch((err) => {
      console.error('Error Log Out Error :', err);
      throw err;
    });

export const getCurrentUser = () =>
  apiClient
    .get(MOCK_USER_INFO, {})
    .then((response) => response)
    .catch((err) => {
      console.error('Error get user info:', err);
      throw err;
    });
