export interface IRequestLoginInput {
  email: string;
  password: string;
}

export interface IRequestLoginResponse {
  token?: string;
  error?: string;
}

export interface ITypeInputForm {
  type: 'email' | 'password';
}
