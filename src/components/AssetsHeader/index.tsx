import React, { ReactElement } from 'react';
import ItemContainer from '../ItemContainer';
import { Header } from './styles';

function AssetsHeader(): ReactElement {
  return (
    <Header>
      <ItemContainer title="Nome" />
      <ItemContainer title="Quantidade" />
      <ItemContainer title="Codigo" />
      <ItemContainer title="Preço" />
      <ItemContainer title="Negociar" />
    </Header>
  );
}

export default AssetsHeader;
