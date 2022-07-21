import axios from 'axios';
import { CONSTANTS } from '../utils/constants';
import { getUserStorage } from './localStorage';

const api = axios.create({ baseURL: CONSTANTS.host });
const { token } = getUserStorage();

api.defaults.headers.common.Authorization = token;

export default api;
