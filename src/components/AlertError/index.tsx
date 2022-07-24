import React, { ReactElement } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  AlertText,
  Container,
  ContainerImage,
  InvisibleElement,
} from './styles';
import { IAlertProps } from './types';

function AlertError(props: IAlertProps): ReactElement {
  const { message, onCloseButton } = props;
  const closeAlertIcon = <CloseIcon color="action" />;

  return (
    <Container onClick={onCloseButton}>
      <InvisibleElement />
      <AlertText>{message}</AlertText>
      <ContainerImage>{closeAlertIcon}</ContainerImage>
    </Container>
  );
}

export default AlertError;
