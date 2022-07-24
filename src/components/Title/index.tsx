import React, { ReactElement } from 'react';
import { TitlePage } from './styles';
import { ITitlePage } from './types';

function TitlePages(props: ITitlePage): ReactElement {
  const { children } = props;
  return <TitlePage>{children}</TitlePage>;
}

export default TitlePages;
