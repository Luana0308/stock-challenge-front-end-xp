import { ChangeEvent, ReactElement } from 'react';

export interface IInputProps {
  leftIcon: ReactElement;
  rigthIcon: ReactElement;
  showRigthIcon: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}
