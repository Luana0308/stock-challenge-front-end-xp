import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import LoginPage from '../index';

describe('Login Page tests', () => {
  it('find adicionar button', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <LoginPage />
      </Router>
    );
    expect(screen.getByText('Entrar')).toBeTruthy();
  });
});
