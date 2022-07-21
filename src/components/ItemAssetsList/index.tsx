import React, { ReactElement } from 'react';
import { Container, ItemContainer } from './styles';
import { IItemListAssetsProps } from './types';

function ItemAssetsList(props: IItemListAssetsProps): ReactElement {
  const { onBuyPress, onSellPress, asset } = props;
  const { nameAsset, qtdAssets, valueAsset } = asset;

  const handleBuyPressButon = (): void => {
    onBuyPress({ nameAsset, qtdAssets, valueAsset });
  };

  const handleSellPressButon = (): void => {
    onSellPress({ nameAsset, qtdAssets, valueAsset });
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
      <ItemContainer>
        <button onClick={handleBuyPressButon} type="button">
          Comprar
        </button>
      </ItemContainer>
      <ItemContainer>
        <button onClick={handleSellPressButon} type="button">
          Vender
        </button>
      </ItemContainer>
    </Container>
  );
}

export default ItemAssetsList;
