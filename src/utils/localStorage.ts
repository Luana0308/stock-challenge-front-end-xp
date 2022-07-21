import { IRequestClientResponse } from '../pages/login/types';
import { IGetClientStorage } from './types';

const CLIENT_KEY = 'client';

export const getClientStorage = (): IGetClientStorage | undefined => {
  const localStorageData = localStorage.getItem(CLIENT_KEY);

  if (localStorageData) {
    return JSON.parse(localStorageData);
  }
  return undefined;
};

export const saveClientStorage = (reponse: IRequestClientResponse): void => {
  localStorage.setItem(CLIENT_KEY, JSON.stringify(reponse));
};
