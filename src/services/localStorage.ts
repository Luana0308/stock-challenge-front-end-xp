import { IGetUserStorageResponse } from './types';

export const getUserStorage = (): IGetUserStorageResponse => {
  const localStorageData = localStorage.getItem('token') ?? '';
  return JSON.parse(localStorageData).data;
};
