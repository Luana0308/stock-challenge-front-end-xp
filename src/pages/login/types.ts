export interface IRequestLoginInput {
  email: string;
  password: string;
}

export interface IRequestClientResponse {
  data?: {
    token?: string;
  };
  error?: Error;
}

export interface ITypeInputForm {
  type: 'email' | 'password';
}
