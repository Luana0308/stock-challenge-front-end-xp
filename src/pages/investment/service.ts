import { getClient } from '../../services/client';
import { CONSTANTS } from '../../utils/constants';
import { IAssetIdResponse } from './types';

export const fetchAssetById = async (id: number): Promise<IAssetIdResponse> => {
  const response = await getClient().get(`${CONSTANTS.routes.asset}/${id}`);
  return response;
};
