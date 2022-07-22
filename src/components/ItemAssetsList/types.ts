import { IAsset } from '../../types';

export interface IItemListAssetsProps {
  asset: IAsset;
  onBuyPress?: (asset: IAsset) => void;
  onSellPress?: (asset: IAsset) => void;
}
