import { ReactElement } from 'react';

export interface IBox {
  children: ReactElement;
  width: number;
  minWidth: number;
}

export interface IBoxCardStyled {
  width: number;
  minWidth: number;
}
