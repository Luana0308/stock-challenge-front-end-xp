import { ReactElement } from 'react';

export interface IBox {
  children: ReactElement;
  width: number;
  minWidth: number;
  height?: number;
  minHeight?: number;
  margin?: string;
}

export interface IBoxCardStyled {
  width: number;
  minWidth: number;
  height?: number;
  minHeight?: number;
  margin?: string;
}
