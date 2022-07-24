import React, { ReactElement } from 'react';
import ItemContainer from '../ItemContainer';
import { Header } from './styles';
import { IAssetHeaderProps } from './types';

function AssetsHeader(props: IAssetHeaderProps): ReactElement {
  const { headers } = props;
  return (
    <Header>
      {headers &&
        headers?.map((header) => <ItemContainer key={header} title={header} />)}
    </Header>
  );
}

export default AssetsHeader;
