import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Button } from '../index';

describe('Button Tests Components', () => {
  it('OnclickButton', () => {
    const onClickMock = jest.fn();

    render(<Button title="button test" onClick={onClickMock} />);

    fireEvent.click(screen.getByText('button test'));

    expect(onClickMock).toBeCalledTimes(1);
  });
  it('title in Button', () => {
    render(<Button title="test" />);

    expect(screen.getByText('test')).toBeTruthy();
  });
});
