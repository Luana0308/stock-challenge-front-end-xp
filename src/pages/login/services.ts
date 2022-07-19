import axios from 'axios';
import { CONSTANTS } from '../../utils/constants';
import { IRequestLoginInput, IRequestLoginResponse } from './types';

const loginEndpoint = '/login';

export const requestLogin = async (
  input: IRequestLoginInput
): Promise<IRequestLoginResponse> => {
  const { email, password } = input;

  const url = CONSTANTS.host + loginEndpoint;

  const response: any = { token: undefined, error: undefined };

  try {
    const token = await axios.post(url, { email, password });
    response.token = token;
  } catch (error: any) {
    response.error = error.message;
  }

  return new Promise((resolve) => {
    resolve(response);
  });
};
