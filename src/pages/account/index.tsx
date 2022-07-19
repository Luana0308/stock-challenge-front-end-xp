import React from 'react';
import { Link } from 'react-router-dom';

function Account(): React.ReactElement {
  return (
    <main>
      <h1>Estou na pagina de deposito e saque da conta</h1>
      <Link to="/listAssets">
        <button type="button">Voltar</button>
      </Link>
      <button type="button">Confirmar</button>
    </main>
  );
}

export default Account;
