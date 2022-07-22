import { IAsset } from '../../types';

export interface IAssetIdResponse {
  data: IAsset;
  status: number;
}

export interface ILocationInvesmentPage {
  state: IAsset;
}
