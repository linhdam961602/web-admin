/* Declare permission checking functions and has access functions */
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  REMEMBER_ME_STORAGE_KEY,
  LOGIN_USERNAME_STORAGE_KEY,
} from 'constants/common';

// access token
export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const clearAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

// refresh token
export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);

export const clearRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN);
};

export const setRememberFeature = (isRemember: string, userName: string) => {
  localStorage.setItem(REMEMBER_ME_STORAGE_KEY, isRemember);
  if (isRemember) {
    localStorage.setItem(LOGIN_USERNAME_STORAGE_KEY, userName);
  } else {
    localStorage.removeItem(LOGIN_USERNAME_STORAGE_KEY);
  }
};

export const clearUserCredential = () => {
  // eslint-disable-next-line no-console
  console.trace('__________Trace log clear auth___________');
  clearAccessToken();
  clearRefreshToken();
};
