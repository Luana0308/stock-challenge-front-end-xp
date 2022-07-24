import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountPage from '../account';
import AssetsPage from '../Assets';
import LoginPage from '../login';
import WalletPage from '../wallet';
import { CONSTANTS } from '../../utils/constants';

function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* <Route path={CONSTANTS.routes.login} element={<LoginPage />} /> */}
      <Route path={CONSTANTS.routes.account} element={<AccountPage />} />
      <Route path={CONSTANTS.routes.investment} element={<WalletPage />} />
      <Route path={CONSTANTS.routes.asset} element={<AssetsPage />} />
    </Routes>
  );
}

export default Router;
