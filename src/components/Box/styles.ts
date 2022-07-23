import styled from 'styled-components';
import { IBoxCardStyled } from './types';

export const BoxCard = styled.div`
  width: ${(props: IBoxCardStyled) => props.width}%;
  min-width: ${(props: IBoxCardStyled) => props.minWidth}px;
`;
