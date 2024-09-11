import axios from 'axios';
import queryString from 'query-string';
import { appInfo } from '../constants/appInfo';
import store from '../redux/store';

const axiosClient = axios.create({
  baseURL: appInfo.BASE_URL,
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config: any) => {
    // Assuming you're storing the token in Redux, you can access it like this:
    const token = store.getState().authReducer.authData.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers = {
      Accept: 'application/json',
      ...config.headers,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  res => {
    if (res.data && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error('Error in response'));
  },
  error => {
    console.log(`Error api ${JSON.stringify(error.response)}`);
    return Promise.reject(error);
  }
);

export default axiosClient;
