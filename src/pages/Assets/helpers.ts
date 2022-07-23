import { IAsset } from '../../types';
import { IAssetClient } from './types';

export const convertAsset = (assetClients: IAssetClient[]): IAsset[] => {
  return assetClients.map((item) => item.asset);
};
