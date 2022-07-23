import { IAsset } from '../../types/assets/types';

export interface IListAssetsProps {
  list: IAsset[];
  onBuyPress?: (asset: IAsset) => void;
  onSellPress?: (asset: IAsset) => void;
}
