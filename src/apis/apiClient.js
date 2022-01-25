import axios from 'axios';
import clone from 'lodash/clone';

import { GET_ACCESS_TOKEN, LOGIN } from '../constants/apiUrl';
import { ACCESS_TOKEN } from 'constants/common';

import { API_TIMEOUT } from '../constants/common';

import { INVALID_CREDENTIAL_ERR, HTTP_AUTHORIZATION_HEADER } from './constants';

import { BASE_API_URL } from 'constants/appConfig';
import * as auth from 'containers/Auth/helpers';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (axiosConfig) => {
    const config = clone(axiosConfig);
    if (
      config.url &&
      (config.url.indexOf(LOGIN) !== -1 ||
        config.url.indexOf(GET_ACCESS_TOKEN) !== -1)
    ) {
      // Dont pass token with public API
      return config;
    }
    const token = auth.getAccessToken();
    if (token) {
      config.headers[HTTP_AUTHORIZATION_HEADER] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (err) => {
    const error = { ...err };
    const originalRequest = error.config;

    try {
      if (error.response) {
        if (
          error.response.status === 401 &&
          originalRequest.url &&
          originalRequest.url.indexOf(GET_ACCESS_TOKEN) !== -1
        ) {
          auth.clearUserCredential();
          window.location.href = LOGIN;
          return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest.retry) {
          originalRequest.retry = true;
          const refreshToken = auth.getRefreshToken();
          if (refreshToken) {
            return apiClient
              .post(GET_ACCESS_TOKEN, {
                refreshToken,
              })
              .then((response) => {
                if (response.status === 200 || response.status === 201) {
                  const payload = response.data;
                  if (payload.resultCode === 'OK') {
                    auth.setAccessToken(response.data.data[ACCESS_TOKEN]);
                    return apiClient(originalRequest);
                  }
                }

                return null;
              });
          }
          if (
            originalRequest.url &&
            originalRequest.url.indexOf(LOGIN) !== -1
          ) {
            // if url is login - it means that credential is invalid
            error.code = 401;
            error.type = INVALID_CREDENTIAL_ERR;
            return Promise.reject(error);
          }
        } else if (error.response.status === 401) {
          auth.clearUserCredential();
          window.location.href = LOGIN;
        }
      }
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

export default apiClient;
