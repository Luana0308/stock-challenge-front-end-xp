import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home';
import LoginPage from '../login';
import { PrivateRoute } from './PrivateRoute';

function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/jackson"
        element={
          <PrivateRoute auth={false}>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
