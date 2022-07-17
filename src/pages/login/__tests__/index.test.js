import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../index';

describe('Login Page tests', () => {
  it('find adicionar button', () => {
    render(<LoginPage />);
    expect(screen.getByText('adicionar')).toBeTruthy();
  });
});
