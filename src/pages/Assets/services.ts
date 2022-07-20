import axios from 'axios';
import { IAsset } from '../../types';
import { CONSTANTS } from '../../utils/constants';

const endpoint = '/assets';
export const fetchStoreAssets = async (): Promise<IAsset[]> => {
  const response = await axios.get(CONSTANTS.host + endpoint);
  return response.data;
};
