import React, { ReactElement } from 'react';
import {
  Container,
  ContainerLeftIcon,
  ContainerRigthIcon,
  Input,
} from './styles';
import { IInputProps } from './types';

function InputText(props: IInputProps): ReactElement {
  const {
    leftIcon,
    rigthIcon,
    showRigthIcon,
    onChange,
    placeholder,
    type,
    width,
  } = props;

  return (
    <Container width={width}>
      {leftIcon && <ContainerLeftIcon>{leftIcon}</ContainerLeftIcon>}
      <Input placeholder={placeholder} onChange={onChange} type={type} />
      {showRigthIcon && <ContainerRigthIcon>{rigthIcon}</ContainerRigthIcon>}
    </Container>
  );
}
export default InputText;
