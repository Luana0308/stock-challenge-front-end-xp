import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getClientStorage } from '../../utils/localStorage';
import { CONSTANTS } from '../../utils/constants';
import { depositMoney, fetchAccounClient, withdrawMoney } from './services';
import Navbar from '../../components/NavBar';

function AccountPage(): React.ReactElement {
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [inputMoney, setInputMoney] = useState<number>(0);
  const id = getClientStorage()?.id;

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
      if (id) {
        const response = await fetchAccounClient(id);
        setAccountBalance(response.value);
      }
    };

    getFetchClient();
  }, [id]);

  return (
    <main>
      <Navbar />
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
