/* Declare permission checking functions and has access functions */
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  REMEMBER_ME_STORAGE_KEY,
  LANGUAGE,
} from 'constants/common';
import { DEFAULT_LOCALE } from 'i18n';
import querystring from 'query-string';

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

export const setLanguage = (lang: string = DEFAULT_LOCALE) => {
  localStorage.setItem(LANGUAGE, lang);
};

export const getLanguage = () =>
  localStorage.getItem(LANGUAGE) ||
  (navigator.language?.slice?.(0, 2) === 'en' ? 'en' : DEFAULT_LOCALE);

export const setRememberFeature = (isRemember: boolean, username: string) => {
  if (isRemember) {
    localStorage.setItem(REMEMBER_ME_STORAGE_KEY, username);
  } else {
    localStorage.removeItem(REMEMBER_ME_STORAGE_KEY);
  }
};

export const getRememberedUser = () =>
  localStorage.getItem(REMEMBER_ME_STORAGE_KEY);

export const clearUserCredential = () => {
  // eslint-disable-next-line no-console
  console.trace('__________Trace log clear auth___________');
  clearAccessToken();
  clearRefreshToken();
};

export const getReDirectUrl = (): any => {
  const redirectUrl = querystring.parse(window.location.search).redirect;
  if (redirectUrl && redirectUrl !== '') {
    return redirectUrl;
  }
  return '';
};
