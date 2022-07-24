import { getClient } from '../../services/client';
import {
  IRequestLoginInput,
  IRequestClientResponse,
  IRequestClientResponseError,
} from './types';

const loginEndpoint = '/login';

export const requestLogin = async (
  input: IRequestLoginInput
): Promise<IRequestClientResponse> => {
  const { email, password } = input;

  try {
    const response = await getClient().post(loginEndpoint, { email, password });
    return response.data;
  } catch (error: unknown) {
    return { error: error as IRequestClientResponseError };
  }
};
