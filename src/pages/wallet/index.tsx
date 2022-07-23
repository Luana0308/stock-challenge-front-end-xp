import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import ItemAssetsList from '../../components/ItemAssetsList';
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
    <main>
      <h1>Estou na pagina de comprar ou vende açao especifica</h1>
      {asset && <ItemAssetsList asset={asset} />}
      <input
        type="number"
        placeholder="quantidade ações"
        onChange={handleInputChange}
      />
      <Button disabled={false} title="Comprar" onClick={handleOnClickBuy} />
      <Button disabled={false} title="Vender" onClick={handleOnClickSell} />
      <Link to={CONSTANTS.routes.asset}>
        <Button disabled={false} title="Voltar" />
      </Link>
    </main>
  );
}

export default WalletPage;
