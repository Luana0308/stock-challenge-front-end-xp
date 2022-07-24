import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { CONSTANTS } from '../../utils/constants';
import { validateForm } from './helper';
import { requestLogin } from './services';
import { Aside, Container, ContentForm } from './styles';
import finacialLogo from '../../images/finacialLogo.png';
import { saveClientStorage } from '../../utils/localStorage';
import { IRequestClientResponse } from './types';
import Loader from '../../components/Loader';
import { Card } from '../../components/Card';
import InputText from '../../components/InputText';
import { Button } from '../../components/Button';
import TitlePage from '../../components/TitlePage';

function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [clientResponse, setClientResponse] = useState<
    IRequestClientResponse | undefined
  >(undefined);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(
    !validateForm(email, password)
  );
  const [loginError, setLoginError] = useState<boolean>(false);
  const leftInputIcon = <PersonOutlineIcon color="action" />;
  const leftPasswordIcon = <LockOpenIcon color="action" />;
  const rigthInputIcon = <ErrorOutlineIcon sx={{ color: 'red' }} />;
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
    } else {
      setPassword(input.value);
    }

    setButtonDisabled(!validateForm(email, password));
  };

  const handleOnClickButton = async (): Promise<void> => {
    setIsLoading(true);
    const result = await requestLogin({ email, password });
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((f) => setTimeout(f, 1000));

    if (result?.error?.response?.status === 401) {
      setLoginError(true);
      setIsLoading(false);
    }
    if (result.token && result.id) {
      setLoginError(false);
      setClientResponse(result);
    }
  };

  return (
    <Container>
      <ContentForm>
        <Card style={{ marginTop: '40%', minWidth: '70%' }}>
          <form>
            <TitlePage text="Invest Money" />
            <InputText
              type="email"
              placeholder="digite seu email"
              leftIcon={leftInputIcon}
              rigthIcon={rigthInputIcon}
              onChange={handleChangeInput}
              showRigthIcon={loginError}
            />
            <InputText
              type="password"
              leftIcon={leftPasswordIcon}
              rigthIcon={rigthInputIcon}
              placeholder="digite sua senha"
              onChange={handleChangeInput}
              showRigthIcon={loginError}
            />
            {loginError && (
              <p style={{ color: 'red' }}>
                Desculpe, seu usuário ou senha estão incorretos
              </p>
            )}
            <Button
              onClick={handleOnClickButton}
              disabled={buttonDisabled}
              type="button"
              title="Entrar"
            />
          </form>
        </Card>
      </ContentForm>
      <Aside>
        <img src={finacialLogo} alt="logo Finance" />
      </Aside>
      {isLoading ? <Loader /> : null}
    </Container>
  );
}
export default LoginPage;
