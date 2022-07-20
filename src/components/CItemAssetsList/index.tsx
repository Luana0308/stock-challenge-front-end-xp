import React, { ReactElement } from 'react';
import { Container } from './styles';
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
      <p>{nameAsset}</p>
      <p>{qtdAssets}</p>
      <p>{valueAsset}</p>
      <button onClick={handleBuyPressButon} type="button">
        Comprar
      </button>
      <button onClick={handleSellPressButon} type="button">
        Vender
      </button>
    </Container>
  );
}

export default ItemAssetsList;
