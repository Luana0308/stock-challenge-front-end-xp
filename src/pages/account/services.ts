import axios from 'axios';
import { CONSTANTS } from '../../utils/constants';

const endpoint = `/account`;

export const fetchAccounClient = async (id, token): Promise<void> => {
  const response = await axios.get(`${CONSTANTS.host + endpoint}/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};
