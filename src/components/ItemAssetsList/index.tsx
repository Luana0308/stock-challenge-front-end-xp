import React, { ReactElement } from 'react';
import { Container, ItemContainer } from './styles';
import { IItemListAssetsProps } from './types';

function ItemAssetsList(props: IItemListAssetsProps): ReactElement {
  const { onBuyPress, onSellPress, asset } = props;
  console.log(props);
  const { nameAsset, qtdAssets, valueAsset } = asset;

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
      <ItemContainer>
        <p>{nameAsset}</p>
      </ItemContainer>
      <ItemContainer>
        <p>{qtdAssets}</p>
      </ItemContainer>
      <ItemContainer>
        <p>{valueAsset}</p>
      </ItemContainer>
      {onBuyPress && (
        <ItemContainer>
          <button onClick={handleBuyPressButon} type="button">
            Comprar
          </button>
        </ItemContainer>
      )}
      {onSellPress && (
        <ItemContainer>
          <button onClick={handleSellPressButon} type="button">
            Vender
          </button>
        </ItemContainer>
      )}
    </Container>
  );
}

export default ItemAssetsList;
