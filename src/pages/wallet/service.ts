import { getClient } from '../../services/client';
import { CONSTANTS } from '../../utils/constants';
import {
  IAssetIdResponse,
  IWalletBuyBodyRequest,
  IWalletBuyBodyResponse,
  IWalletSellBodyRequest,
  IWalletSellBodyResponse,
} from './types';

export const fetchAssetById = async (id: number): Promise<IAssetIdResponse> => {
  const response = await getClient().get(`${CONSTANTS.routes.asset}/${id}`);
  return response;
};

export const sellAssetClient = async (
  request: IWalletSellBodyRequest
): Promise<IWalletSellBodyResponse> => {
  try {
    const response = await getClient().post(CONSTANTS.endpoints.sell, request);
    return response;
  } catch (error: unknown) {
    return error as IWalletSellBodyResponse;
  }
};

export const buyAssetClient = async (
  request: IWalletBuyBodyRequest
): Promise<IWalletBuyBodyResponse> => {
  try {
    const response = await getClient().post(CONSTANTS.endpoints.buy, request);
    return response;
  } catch (error: unknown) {
    return error as IWalletBuyBodyResponse;
  }
};
