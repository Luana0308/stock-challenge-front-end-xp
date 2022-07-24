import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AssetsList from '../../components/AssetsList';
import Box from '../../components/Box';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import Navbar from '../../components/NavBar';
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
      <Navbar />
      <h2>Minhas ações</h2>
      {myAssets && (
        <Box width={60} minWidth={540}>
          <Card data-testId="oi">
            <AssetsList
              list={convertAsset(myAssets)}
              onSellPress={onSellPress}
            />
          </Card>
        </Box>
      )}
      <h2>Açoes da Xp</h2>
      {assets && (
        <Box width={60} minWidth={540}>
          <Card>
            <AssetsList list={assets} onBuyPress={onBuyPress} />
          </Card>
        </Box>
      )}
      <Link to={CONSTANTS.routes.account}>
        <Button type="button" title="Deposito/Retirada" />
      </Link>
    </main>
  );
}

export default AssetsPage;
