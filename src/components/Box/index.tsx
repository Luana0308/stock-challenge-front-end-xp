import React, { ReactElement } from 'react';
import { BoxCard } from './styles';
import { IBox } from './types';

function Box(props: IBox): ReactElement {
  const { children, width, minWidth } = props;
  return (
    <BoxCard width={width} minWidth={minWidth}>
      {children}
    </BoxCard>
  );
}

export default Box;
