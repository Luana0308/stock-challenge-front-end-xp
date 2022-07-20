import React, { ReactElement } from 'react';
import ItemAssetsList from '../CItemAssetsList';
import { IListAssetsProps } from './types';

function AssetsList(props: IListAssetsProps): ReactElement {
  const { list, onBuyPress, onSellPress } = props;
  return (
    <div>
      {list.map((item) => (
        <ItemAssetsList
          key={item.nameAsset}
          nameAsset={item.nameAsset}
          qtdAsset={item.qtdAsset}
          valueAsset={item.valueAsset}
          onBuyPress={onBuyPress}
          onSellPress={onSellPress}
        />
      ))}
      ;
    </div>
  );
}

export default AssetsList;
