import React, { ChangeEvent, useEffect, useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Card } from '@mui/material';
import { getClientStorage } from '../../utils/localStorage';
import { depositMoney, fetchAccounClient, withdrawMoney } from './services';
import Navbar from '../../components/NavBar';
import InputText from '../../components/InputText';
import Tabs from '../../components/Tab';
import { Button } from '../../components/Button';
import { EActionButton } from './types';
import TitlePage from '../../components/TitlePage';
import { CONSTANTS } from '../../utils/constants';

function AccountPage(): React.ReactElement {
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [inputMoney, setInputMoney] = useState<number>(0);
  const id = getClientStorage()?.id;
  const leftInputIcon = <AttachMoneyIcon color="action" />;
  const [currentButton, setActionButton] = useState<EActionButton>(
    EActionButton.Buy
  );
  const handleWithdrawButton = async (): Promise<void> => {
    const response = await withdrawMoney(inputMoney);
    setAccountBalance(response.valorAtualConta);
  };

  const handleDepositButton = async (): Promise<void> => {
    const response = await depositMoney(inputMoney);
    setAccountBalance(response.valorAtualConta);
  };

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setInputMoney(Number(value));
  };

  const onChangeTab = (currentTab: string): void => {
    if (currentTab === 'buy') {
      setActionButton(EActionButton.Buy);
    }
    if (currentTab === 'sell') {
      setActionButton(EActionButton.Sell);
    }
  };

  useEffect(() => {
    const getFetchClient = async (): Promise<void> => {
      if (id) {
        const response = await fetchAccounClient(id);
        setAccountBalance(response.value);
      }
    };

    getFetchClient();
  }, [id]);

  return (
    <main style={{ backgroundColor: '#f8f9fa', height: '100vh' }}>
      <Navbar />
      <Card
        style={{
          padding: '8px',
          marginTop: '32px',
          height: '50%',
          width: '70%',
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Tabs onChangeTab={onChangeTab} />
        <TitlePage text={CONSTANTS.texts.account.title} />
        <h2 style={{ textAlign: 'center', color: '#3a5a40' }}>
          R$ {accountBalance}
        </h2>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '30%' }}>
            <InputText
              onChange={handleInputChange}
              type="number"
              leftIcon={leftInputIcon}
              placeholder={
                currentButton === EActionButton.Buy
                  ? CONSTANTS.texts.account.placeHolderDeposit
                  : CONSTANTS.texts.account.placeHolderWithdraw
              }
              showRigthIcon={false}
            />
          </div>

          <Button
            onClick={
              currentButton === EActionButton.Buy
                ? handleDepositButton
                : handleWithdrawButton
            }
            type="button"
            title={CONSTANTS.texts.account.confirmButton}
          />
        </div>
      </Card>
    </main>
  );
}

export default AccountPage;
