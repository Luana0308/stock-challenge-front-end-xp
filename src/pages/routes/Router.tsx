import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../account';
import Home from '../home';
import ListAssets from '../listAssets';
import LoginPage from '../login';
import MovimentAsset from '../movimentAsset';

function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="movimentAsset" element={<MovimentAsset />} />
      <Route path="/listAssets" element={<ListAssets />} />
    </Routes>
  );
}

export default Router;
