export const CONSTANTS = {
  host: 'https://stock-challenge-back-end-xp.herokuapp.com',
  routes: {
    login: '/login',
    asset: '/assets',
    account: '/account',
    investment: '/wallet',
  },
  endpoints: {
    sell: '/investments/sell',
    buy: 'investments/buy',
    myAsset: 'assets/client',
  },
  texts: {
    account: {
      title: 'Saldo Disponivel',
      confirmButton: 'Confirmar',
      placeHolderDeposit: 'Valor de Deposito:',
      placeHolderWithdraw: 'Valor de Saque',
    },
  },
};
