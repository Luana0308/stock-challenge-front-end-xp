import React, { ReactElement } from 'react';
import ItemAssetsList from '../CItemAssetsList';
import { IListAssetsProps } from './types';

function AssetsList(props: IListAssetsProps): ReactElement {
  const { list, onBuyPress, onSellPress } = props;

  return (
    <div>
      {list.map((item) => {
        return (
          <ItemAssetsList
            key={item.nameAsset}
            asset={item}
            onBuyPress={onBuyPress}
            onSellPress={onSellPress}
          />
        );
      })}
      ;
    </div>
  );
}

export default AssetsList;
