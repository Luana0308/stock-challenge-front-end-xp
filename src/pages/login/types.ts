export interface IRequestLoginInput {
  email: string;
  password: string;
}

export interface IRequestClientResponseError {
  response: {
    status: number;
  };
}

export interface IRequestClientResponse {
  token?: string;
  id?: number;
  error?: IRequestClientResponseError;
}

export interface ITypeInputForm {
  type: 'email' | 'password';
}
