import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS } from '../../utils/constants';
import { validateForm } from './helper';
import { requestLogin } from './services';
import {
  Aside,
  Container,
  ContentForm,
  ContentImage,
  MainButton,
} from './styles';
import logo from '../../images/logo.png';
import finacialLogo from '../../images/finacialLogo.png';
import { saveClientStorage } from '../../utils/localStorage';
import { IRequestClientResponse } from './types';

function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clientResponse, setClientResponse] = useState<
    IRequestClientResponse | undefined
  >(undefined);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (clientResponse !== undefined) {
      navigate(CONSTANTS.routes.asset);
      saveClientStorage(clientResponse);
    }
  }, [clientResponse, navigate]);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target;
    if (input.type === 'email') {
      setEmail(input.value);
      localStorage.setItem('email', JSON.stringify(input.value));
    } else {
      setPassword(input.value);
    }

    setButtonDisabled(!validateForm(email, password));
  };

  const handleOnClickButton = async (): Promise<void> => {
    const result = await requestLogin({ email, password });
    setClientResponse(result);
  };

  return (
    <Container>
      <ContentForm>
        <form>
          <ContentImage>
            <img src={logo} alt="logo Finance" />
          </ContentImage>
          <input
            type="email"
            onChange={handleChangeInput}
            placeholder="e-mail"
          />
          <input
            type="password"
            placeholder="senha"
            onChange={handleChangeInput}
          />
          <MainButton
            type="button"
            onClick={handleOnClickButton}
            disabled={buttonDisabled}
          >
            Entrar
          </MainButton>
        </form>
      </ContentForm>
      <Aside>
        <img src={finacialLogo} alt="logo Finance" />
      </Aside>
    </Container>
  );
}
export default LoginPage;
