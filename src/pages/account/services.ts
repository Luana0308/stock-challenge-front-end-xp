import { getClient } from '../../services/client';
import { IAccountBalance, IClient } from './types';

const endpoint = `/account`;

export const fetchAccounClient = async (id: number): Promise<IClient> => {
  const response = await getClient().get(`${endpoint}/${id}`);
  return response.data;
};

export const depositMoney = async (value: number): Promise<IAccountBalance> => {
  const accountBalance = await getClient().post(`${endpoint}/deposit`, {
    value,
  });

  return accountBalance.data;
};

export const withdrawMoney = async (
  value: number
): Promise<IAccountBalance> => {
  try {
    const accountBalance = await getClient().post(`${endpoint}/withdraw`, {
      value,
    });
    return accountBalance.data;
  } catch (error) {
    return error;
  }
};
