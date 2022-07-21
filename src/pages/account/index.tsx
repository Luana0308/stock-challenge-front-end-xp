import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserStorage } from '../../services/localStorage';
import { CONSTANTS } from '../../utils/constants';
import { depositMoney, fetchAccounClient, withdrawMoney } from './services';
import { IClient } from './types';

function AccountPage(): React.ReactElement {
  const [client, setClient] = useState<IClient | undefined>();
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [inputMoney, setInputMoney] = useState<number>(0);
  const { id } = getUserStorage();

  const handleWithdrawButton = async (): Promise<void> => {
    const response = await withdrawMoney(inputMoney);
    setAccountBalance(response.valorAtualConta);
  };

  const handleDepositButton = async (): Promise<void> => {
    const response = await depositMoney(inputMoney);
    setAccountBalance(response.valorAtualConta);
  };

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setInputMoney(Number(value));
  };

  useEffect(() => {
    const getFetchClient = async (): Promise<void> => {
      const response = await fetchAccounClient(id);
      setClient(response);
      setAccountBalance(response.value);
    };

    getFetchClient();
  }, [id]);

  return (
    <main>
      <h1>Estou na pagina de deposito e saque da conta</h1>
      <p>Meu saldo</p>
      <p>{accountBalance}</p>
      <input onChange={handleInputChange} type="number" placeholder="valor" />
      <button type="button" onClick={handleWithdrawButton}>
        Retirada
      </button>
      <button onClick={handleDepositButton} type="button">
        Deposito
      </button>
      <br />
      <Link to={CONSTANTS.routes.asset}>
        <button type="button">Voltar</button>
      </Link>
      <button type="button">Confirmar</button>
    </main>
  );
}

export default AccountPage;
