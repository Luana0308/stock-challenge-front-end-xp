import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AssetsList from '../../components/AssetsList';
import { Card } from '../../components/Card';
import { IAsset } from '../../types';
import { CONSTANTS } from '../../utils/constants';
import { getClientStorage } from '../../utils/localStorage';
import { convertAsset } from './helpers';
import { fetchAssetByClientId, fetchStoreAssets } from './services';
import { IAssetClient } from './types';

function AssetsPage(): React.ReactElement {
  const navigation = useNavigate();
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [myAssets, setMyAssets] = useState<IAssetClient[]>([]);

  const fetchAssets = async (): Promise<void> => {
    const response = await fetchStoreAssets();
    setAssets(response);
  };

  const fetchMyAssets = async (): Promise<void> => {
    const id = getClientStorage()?.id;
    if (id) {
      const response = await fetchAssetByClientId({ id });
      setMyAssets(response.data);
    }
  };

  const navigateToInvesment = (asset: IAsset): void => {
    navigation(CONSTANTS.routes.investment, {
      state: asset,
    });
  };

  const onBuyPress = (asset: IAsset): void => {
    navigateToInvesment(asset);
  };
  const onSellPress = (asset: IAsset): void => {
    navigateToInvesment(asset);
  };

  useEffect(() => {
    fetchAssets();
    fetchMyAssets();
  }, []);

  return (
    <main style={{ backgroundColor: '#f8f9fa' }}>
      <h1>Estou na pagina de lista das acoes minhas e acoes para comprar</h1>
      <h2>Minhas açõses</h2>
      {myAssets && (
        <Card>
          <AssetsList list={convertAsset(myAssets)} onSellPress={onSellPress} />
        </Card>
      )}
      <h2>Açoes da Xp</h2>
      {assets && (
        <Card>
          <AssetsList list={assets} onBuyPress={onBuyPress} />
        </Card>
      )}
      <Link to={CONSTANTS.routes.account}>
        <button type="button">Deposito/Retirada</button>
      </Link>
    </main>
  );
}

export default AssetsPage;
