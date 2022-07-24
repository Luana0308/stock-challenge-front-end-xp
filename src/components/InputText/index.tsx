import React, { ReactElement } from 'react';
import {
  Container,
  ContainerLeftIcon,
  ContainerRigthIcon,
  Input,
} from './styles';
import { IInputProps } from './types';

function InputText(props: IInputProps): ReactElement {
  const { leftIcon, rigthIcon, showRigthIcon, onChange, placeholder, type } =
    props;

  return (
    <Container>
      <ContainerLeftIcon>{leftIcon}</ContainerLeftIcon>
      <Input placeholder={placeholder} onChange={onChange} type={type} />
      {showRigthIcon && <ContainerRigthIcon>{rigthIcon}</ContainerRigthIcon>}
    </Container>
  );
}
export default InputText;
