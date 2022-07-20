import { IAsset } from '../../types';

export interface IItemListAssetsProps {
  nameAsset: string;
  qtdAsset: number;
  valueAsset: number;
  onBuyPress: (asset: IAsset) => void;
  onSellPress: (asset: IAsset) => void;
}
