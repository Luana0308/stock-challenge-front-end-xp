import React, { ReactElement } from 'react';
import { Container } from './styles';
import { IItemListAssetsProps } from './types';

function ItemAssetsList(props: IItemListAssetsProps): ReactElement {
  const { nameAsset, qtdAsset, valueAsset, onBuyPress, onSellPress } = props;

  const handleBuyPressButon = (): void => {
    onBuyPress({ nameAsset, qtdAsset, valueAsset });
  };

  const handleSellPressButon = (): void => {
    onSellPress({ nameAsset, qtdAsset, valueAsset });
  };

  return (
    <Container>
      <p>{nameAsset}</p>
      <p>{qtdAsset}</p>
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
