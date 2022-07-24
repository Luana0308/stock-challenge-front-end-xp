import React, { ReactElement } from 'react';
import { Text } from './styles';
import { ITitlePage } from './types';

function TitlePage(props: ITitlePage): ReactElement {
  const { text } = props;
  return <Text>{text}</Text>;
}

export default TitlePage;
