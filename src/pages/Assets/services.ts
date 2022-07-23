import { getClient } from '../../services/client';
import { IAsset } from '../../types';
import { CONSTANTS } from '../../utils/constants';
import {
  IFetchAssetsByClientIdRequest,
  IFetchAssetsByClientIdResponse,
} from './types';

const endpoint = '/assets';
export const fetchStoreAssets = async (): Promise<IAsset[]> => {
  const response = await getClient()(endpoint);
  return response.data;
};

export const fetchAssetByClientId = async (
  request: IFetchAssetsByClientIdRequest
): Promise<IFetchAssetsByClientIdResponse> => {
  const response = await getClient().get(
    `${CONSTANTS.endpoints.myAsset}/${request.id}`
  );
  return response;
};
