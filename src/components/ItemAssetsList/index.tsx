import React, { ReactElement } from 'react';
import ItemContainer from '../ItemContainer';
import { Container } from './styles';
import { IItemListAssetsProps } from './types';

function ItemAssetsList(props: IItemListAssetsProps): ReactElement {
  const { onBuyPress, onSellPress, asset } = props;
  const { nameAsset, quantityAsset, valueAsset, codAsset } = asset;

  const handleBuyPressButon = (): void => {
    if (onBuyPress) {
      onBuyPress(asset);
    }
  };

  const handleSellPressButon = (): void => {
    if (onSellPress) {
      onSellPress(asset);
    }
  };

  return (
    <Container>
      <ItemContainer title={nameAsset} />
      <ItemContainer title={quantityAsset} />
      <ItemContainer title={codAsset} />
      <ItemContainer title={valueAsset} />
      {onBuyPress && (
        <ItemContainer onClick={handleBuyPressButon} button="Comprar" />
      )}
      {onSellPress && (
        <ItemContainer onClick={handleSellPressButon} button="Vender" />
      )}
    </Container>
  );
}

export default ItemAssetsList;
