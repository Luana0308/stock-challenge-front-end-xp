import { IAsset } from '../../types';
import { IAssetClient } from './types';

export const convertAsset = (assetClients: IAssetClient[]): IAsset[] => {
  return assetClients.map((item) => {
    return {
      id: item.idAsset,
      quantityAsset: item.quantityAsset,
      codAsset: item.asset.codAsset,
      nameAsset: item.asset.nameAsset,
      valueAsset: item.asset.valueAsset,
    };
  });
};
