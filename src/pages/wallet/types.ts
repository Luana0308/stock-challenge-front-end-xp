import { IAsset } from '../../types';

export interface IAssetIdResponse {
  data: IAsset;
  status: number;
}

export interface ILocationInvesmentPage {
  state: IAsset;
}

export interface IWalletSellBodyRequest {
  idAsset: number;
  quantityAsset: number;
}

export interface IWallet {
  id: number;
  idClient: number;
  idAsset: number;
  quantityAsset: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IWalletSellBodyResponse {
  data: IWallet;
  status: number;
}

export interface IWalletBuyBodyRequest {
  idAsset: number;
  quantityAsset: number;
}

export interface IWalletBuyBodyResponse {
  data: IWallet;
  status: number;
}
