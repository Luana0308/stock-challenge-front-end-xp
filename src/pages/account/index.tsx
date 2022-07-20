import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAccounClient } from './services';

function Account(): React.ReactElement {
  const getToken = localStorage.getItem('token') ?? '';
  const convertToken = JSON.parse(getToken);
  const userId = convertToken.data.id;
  const { token } = convertToken.data;
  useEffect(() => {
    console.log(token);
    fetchAccounClient(userId, token);
  }, []);
  return (
    <main>
      <h1>Estou na pagina de deposito e saque da conta</h1>
      <p>Meu saldo: 1000</p>
      <input type="number" placeholder="valor" />
      <br />
      <button type="button">Retirada</button>
      <button type="button">Deposito</button>
      <br />
      <Link to="/listAssets">
        <button type="button">Voltar</button>
      </Link>
      <button type="button">Confirmar</button>
    </main>
  );
}

export default Account;
