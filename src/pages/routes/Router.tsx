import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountPage from '../account';
import Home from '../home';
import AssetsPage from '../Assets';
import LoginPage from '../login';
import InvestmentPage from '../investment';
import { CONSTANTS } from '../../utils/constants';

function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={CONSTANTS.routes.login} element={<LoginPage />} />
      <Route path={CONSTANTS.routes.account} element={<AccountPage />} />
      <Route path={CONSTANTS.routes.investment} element={<InvestmentPage />} />
      <Route path={CONSTANTS.routes.asset} element={<AssetsPage />} />
    </Routes>
  );
}

export default Router;
