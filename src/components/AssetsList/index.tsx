import React, { ReactElement } from 'react';
import AssetsHeader from '../AssetsHeader';
import ItemAssetsList from '../ItemAssetsList';
import { IListAssetsProps } from './types';

function AssetsList(props: IListAssetsProps): ReactElement {
  const { list, onBuyPress, onSellPress } = props;

  return (
    <div>
      <AssetsHeader />
      {list.map((item) => {
        return (
          <div>
            <ItemAssetsList
              key={item.id}
              asset={item}
              onBuyPress={onBuyPress}
              onSellPress={onSellPress}
            />
          </div>
        );
      })}
    </div>
  );
}

export default AssetsList;
