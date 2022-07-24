import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AssetsList from '../../components/AssetsList';
import Box from '../../components/Box';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import InputText from '../../components/InputText';
import Navbar from '../../components/NavBar';
import TitlePage from '../../components/TitlePage';
import { IAsset } from '../../types';
import { CONSTANTS } from '../../utils/constants';
import { buyAssetClient, fetchAssetById, sellAssetClient } from './service';
import { ILocationInvesmentPage } from './types';

function WalletPage(): React.ReactElement {
  const [asset, setAsset] = useState<IAsset | undefined>();
  const [sellInputValue, setSellInputValue] = useState<number>(0);
  const location = useLocation() as ILocationInvesmentPage;

  useEffect(() => {
    const updateAsset = async (): Promise<void> => {
      const response = await fetchAssetById(location.state.id);
      setAsset(response.data);
    };
    updateAsset();
  }, [location.state.id]);

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setSellInputValue(+value);
  };

  const handleOnClickSell = async (): Promise<void> => {
    if (asset) {
      await sellAssetClient({
        idAsset: asset.id,
        quantityAsset: sellInputValue,
      });
    }
  };
  const handleOnClickBuy = async (): Promise<void> => {
    if (asset) {
      await buyAssetClient({
        idAsset: asset.id,
        quantityAsset: sellInputValue,
      });
    }
  };

  return (
    <main style={{ backgroundColor: '#f8f9fa', height: '100vh' }}>
      <Navbar />
      <Box height={50} width={60} minWidth={20}>
        <div>
          <TitlePage text="Carteira" />
          {asset ? (
            <Card>
              <div>
                <AssetsList
                  list={[asset]}
                  headers={['Nome', 'Quantidade', 'Código', 'Preço']}
                />
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '12px',
                  }}
                >
                  <InputText
                    type="number"
                    placeholder="quantidade ações"
                    onChange={handleInputChange}
                    width={45}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    disabled={false}
                    title="Comprar"
                    onClick={handleOnClickBuy}
                  />
                  <Button
                    disabled={false}
                    title="Vender"
                    onClick={handleOnClickSell}
                  />
                </div>
              </div>
            </Card>
          ) : (
            <p>loader</p>
          )}
        </div>
      </Box>
    </main>
  );
}

export default WalletPage;
