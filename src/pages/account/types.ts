export enum EActionButton {
  Buy = 'buy',
  Sell = 'sell',
}

export interface IClient {
  id: number;
  name: string;
  value: number;
}

export interface IAccountBalance {
  CodClient: number;
  nome: string;
  valor: number;
  valorAtualConta: number;
}
