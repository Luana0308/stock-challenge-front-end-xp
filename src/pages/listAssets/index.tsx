import React from 'react';
import { Link } from 'react-router-dom';

function ListAssets(): React.ReactElement {
  return (
    <main>
      <h1>Estou na pagina de lista das acoes minhas e acoes para comprar</h1>
      <h2>Minhas açõses</h2>

      <h2>Açoes da Xp</h2>
      <Link to="/account">
        <button type="button">Deposito/Retirada</button>
      </Link>
    </main>
  );
}

export default ListAssets;
