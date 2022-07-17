import React from 'react';
import { Container, MainButton, ContainerButton } from './styles';

function LoginPage(): React.ReactElement {
  return (
    <Container>
      <ContainerButton>
        <MainButton type="button">adicionar</MainButton>
      </ContainerButton>
    </Container>
  );
}

export default LoginPage;
