import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ItemAssetsList from '../../components/ItemAssetsList';
import { IAsset } from '../../types';
import { CONSTANTS } from '../../utils/constants';
import { fetchAssetById } from './service';
import { ILocationInvesmentPage } from './types';

function InvestmentPage(): React.ReactElement {
  const [asset, setAsset] = useState<IAsset | undefined>();
  const location = useLocation() as ILocationInvesmentPage;

  const updateAsset = async (): Promise<void> => {
    const response = await fetchAssetById(location.state.id);
    setAsset(response.data);
  };

  useEffect(() => {
    updateAsset();
  }, []);
  useEffect(() => {
    console.log(asset);
  }, [asset]);
  return (
    <main>
      <h1>Estou na pagina de comprar ou vende açao especifica</h1>
      {asset && <ItemAssetsList asset={asset} />}
      <input type="number" placeholder="quantidade ações" />
      <button type="button">Comprar</button>
      <input type="number" placeholder="quantidade acões" />
      <button type="button">Vender</button>
      <Link to={CONSTANTS.routes.asset}>
        <button type="button">Voltar</button>
      </Link>
      <button type="button">Confirmar</button>
    </main>
  );
}

export default InvestmentPage;
