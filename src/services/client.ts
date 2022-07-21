import axios, { AxiosInstance } from 'axios';
import { CONSTANTS } from '../utils/constants';
import { getClientStorage } from '../utils/localStorage';

export const getClient = (): AxiosInstance => {
  const api = axios.create({ baseURL: CONSTANTS.host });
  const token = getClientStorage()?.token ?? '';
  api.defaults.headers.common.Authorization = token;
  return api;
};
