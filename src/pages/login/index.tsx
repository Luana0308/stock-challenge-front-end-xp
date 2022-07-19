import React, { useState, ChangeEvent } from 'react';
import { validateForm } from './helper';
import { requestLogin } from './services';

function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target;
    if (input.type === 'email') {
      setEmail(input.value);
    } else {
      setPassword(input.value);
    }

    setButtonDisabled(!validateForm(email, password));
  };

  const handleOnClickButton = async (): Promise<void> => {
    const result = await requestLogin({
      email,
      password,
    });

    if (result.token) {
      console.log('logou');
    } else {
      console.log('n logou');
    }
  };

  return (
    <div>
      <form>
        <h1>Login Xp Ações</h1>
        <input type="email" onChange={handleChangeInput} placeholder="e-mail" />
        <input
          type="password"
          placeholder="senha"
          onChange={handleChangeInput}
        />
        <button
          type="button"
          onClick={handleOnClickButton}
          disabled={buttonDisabled}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
