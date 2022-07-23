import { IAsset } from '../../types';
import { IWallet } from '../wallet/types';

export interface IFetchAssetsByClientIdRequest {
  id: number;
}
export interface IAssetClient extends IWallet {
  asset: IAsset;
}

export interface IFetchAssetsByClientIdResponse {
  data: IAssetClient[];
  status: number;
}
