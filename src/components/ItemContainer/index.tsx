import React, { ReactElement } from 'react';
import { Container } from './styles';
import { IItemContainerProps } from './types';

function ItemContainer(props: IItemContainerProps): ReactElement | null {
  const { title, button, onClick } = props;
  if (title) {
    return (
      <Container>
        <p>{title}</p>
      </Container>
    );
  }
  if (button) {
    return (
      <Container>
        <button onClick={onClick} type="button">
          {button}
        </button>
      </Container>
    );
  }
  return null;
}

export default ItemContainer;
