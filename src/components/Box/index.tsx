import React, { ReactElement } from 'react';
import { BoxCard } from './styles';
import { IBox } from './types';

function Box(props: IBox): ReactElement {
  const { margin, children, width, minWidth, height, minHeight } = props;
  return (
    <BoxCard
      height={height}
      minHeight={minHeight}
      width={width}
      minWidth={minWidth}
      margin={margin}
    >
      {children}
    </BoxCard>
  );
}

export default Box;
