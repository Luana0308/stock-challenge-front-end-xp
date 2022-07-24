import React, { ReactElement } from 'react';
import ReactLoading from 'react-loading';
import { Container, ContainerContent } from './styles';

function Loader(): ReactElement {
  return (
    <Container>
      <ContainerContent>
        <ReactLoading
          type="spinningBubbles"
          color="white"
          width="200px"
          height="200px"
        />
      </ContainerContent>
    </Container>
  );
}

export default Loader;
