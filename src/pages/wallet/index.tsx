import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AlertError from '../../components/AlertError';
import AssetsList from '../../components/AssetsList';
import Box from '../../components/Box';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import InputText from '../../components/InputText';
import Loader from '../../components/Loader';
import Navbar from '../../components/NavBar';
import TitlePage from '../../components/TitlePage';
import { IAsset } from '../../types';
import { buyAssetClient, fetchAssetById, sellAssetClient } from './service';
import { ILocationInvesmentPage } from './types';

function WalletPage(): React.ReactElement {
  const [asset, setAsset] = useState<IAsset | undefined>();
  const [sellInputValue, setSellInputValue] = useState<number>(0);
  const location = useLocation() as ILocationInvesmentPage;
  const [showError, setShowError] = useState<string | undefined>(undefined);

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
      const response = await buyAssetClient({
        idAsset: asset.id,
        quantityAsset: sellInputValue,
      });

      if (response.message) {
        setShowError(response.message);
      }
    }
  };

  const handleOnCloseError = (): void => {
    setShowError(undefined);
  };

  return (
    <main style={{ backgroundColor: '#f8f9fa', height: '100vh' }}>
      <Navbar />
      <Box height={50} width={60} minWidth={20} margin="2% 20% 4% 20%">
        <div>
          <TitlePage text="Corretora" />
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
                {showError && (
                  <AlertError
                    message={showError}
                    onCloseButton={handleOnCloseError}
                  />
                )}
              </div>
            </Card>
          ) : (
            <Loader />
          )}
        </div>
      </Box>
    </main>
  );
}

export default WalletPage;
