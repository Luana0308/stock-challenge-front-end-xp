import axios from 'axios';
import { CONSTANTS } from '../../utils/constants';
import { IClient } from './types';

const endpoint = `/account`;

export const fetchAccounClient = async (
  id: number,
  token: string
): Promise<IClient> => {
  const response = await axios.get(`${CONSTANTS.host + endpoint}/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};
