import React from 'react';
import { Container } from './styles';
import { ICardProps } from './types';

export function Card(props: ICardProps): React.ReactElement {
  const { children, style } = props;
  return <Container style={style}>{children}</Container>;
}
