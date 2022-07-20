import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AssetsList from '../../components/AssetsList';
import { IAsset } from '../../types';
import { fetchStoreAssets } from './services';

function AssetsPage(): React.ReactElement {
  const navigation = useNavigate();
  const [assets, setAssets] = useState<IAsset[]>([]);

  const fetchAssets = async (): Promise<void> => {
    const response = await fetchStoreAssets();
    setAssets(response);
  };

  const onBuyPress = (asset: IAsset): void => {
    navigation('/investment');
  };
  const onSellPress = (asset: IAsset): void => {
    navigation('/investment');
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <main>
      <h1>Estou na pagina de lista das acoes minhas e acoes para comprar</h1>
      <h2>Minhas açõses</h2>
      <h2>Açoes da Xp</h2>
      {assets && (
        <AssetsList
          list={assets}
          onBuyPress={onBuyPress}
          onSellPress={onSellPress}
        />
      )}
      <Link to="/account">
        <button type="button">Deposito/Retirada</button>
      </Link>
    </main>
  );
}

export default AssetsPage;
