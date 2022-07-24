import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AssetsList from '../../components/AssetsList';
import Box from '../../components/Box';
import { Card } from '../../components/Card';
import Loader from '../../components/Loader';
import Navbar from '../../components/NavBar';
import TitlePage from '../../components/TitlePage';
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
      <TitlePage text="Minhas Ações" />
      {myAssets ? (
        <Box width={60} minWidth={540} margin="2% 20% 4% 20%">
          <Card>
            <AssetsList
              list={convertAsset(myAssets)}
              onSellPress={onSellPress}
              headers={['Nome', 'Quantidade', 'Código', 'Preço', 'Negociar']}
            />
          </Card>
        </Box>
      ) : (
        <Loader />
      )}
      <TitlePage text="Açoes da Invest Money" />
      {assets ? (
        <Box width={60} minWidth={540} margin="2% 20% 4% 20%">
          <Card>
            <AssetsList
              list={assets}
              onBuyPress={onBuyPress}
              headers={['Nome', 'Quantidade', 'Código', 'Preço', 'Negociar']}
            />
          </Card>
        </Box>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default AssetsPage;
