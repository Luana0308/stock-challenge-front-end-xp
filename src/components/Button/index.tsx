import React from 'react';
import { ButtonStyled } from './styles';
import { ButtonProps } from './types';

export function Button(props: ButtonProps): React.ReactElement {
  const { onClick, title, disabled } = props;

  return (
    <ButtonStyled disabled={disabled} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
}
