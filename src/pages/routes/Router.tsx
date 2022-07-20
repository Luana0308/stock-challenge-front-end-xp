import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../account';
import Home from '../home';
import AssetsPage from '../Assets';
import LoginPage from '../login';
import Investment from '../investment';

function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/assets" element={<AssetsPage />} />
    </Routes>
  );
}

export default Router;
