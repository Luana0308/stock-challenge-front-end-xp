import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAccounClient } from './services';
import { IClient } from './types';

function AccountPage(): React.ReactElement {
  const [client, setClient] = useState<IClient | undefined>();
  const getToken = localStorage.getItem('token') ?? '';
  const convertToken = JSON.parse(getToken);
  const userId = convertToken.data.id;
  const { token } = convertToken.data;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const money = event.target.value;
  };

  const handleDepositButton = (): void => {
    // console.log(money);
    // console.log(valueAccount);
  };

  useEffect(() => {
    const getFetchClient = async (): Promise<void> => {
      const response = await fetchAccounClient(userId, token);
      setClient(response);
    };

    getFetchClient();
  }, [userId, token]);

  return (
    <main>
      <h1>Estou na pagina de deposito e saque da conta</h1>
      <p>Meu saldo</p>
      <p>{client?.value}</p>
      <input onChange={handleInputChange} type="number" placeholder="valor" />
      <button type="button">Retirada</button>
      <button onClick={handleDepositButton} type="button">
        Deposito
      </button>
      <br />
      <Link to="/listAssets">
        <button type="button">Voltar</button>
      </Link>
      <button type="button">Confirmar</button>
    </main>
  );
}

export default AccountPage;
