import { getClient } from '../../services/client';
import { IAsset } from '../../types';

const endpoint = '/assets';
export const fetchStoreAssets = async (): Promise<IAsset[]> => {
  const response = await getClient()(endpoint);
  return response.data;
};
