import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateForm } from './helper';
import { requestLogin } from './services';

function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | undefined>(undefined);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== undefined) {
      navigate('/listAssets');
    }
  }, [token, navigate]);

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
    const result = await requestLogin({ email, password });
    setToken(result.token);
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
