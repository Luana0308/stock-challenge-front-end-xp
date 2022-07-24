import React, { ReactElement, useState } from 'react';
import { Tab, TabItemNavigator, TabNavigation } from './styles';
import { ITabProps } from './types';

function Tabs(props: ITabProps): ReactElement {
  const { onChangeTab } = props;
  const [activeTab, setActiveTab] = useState('buy');

  const handleTab1 = (): void => {
    setActiveTab('buy');
    onChangeTab('buy');
  };

  const handleTab2 = (): void => {
    setActiveTab('sell');
    onChangeTab('sell');
  };

  return (
    <Tab>
      <TabNavigation>
        <TabItemNavigator isActive={activeTab === 'buy'} onClick={handleTab1}>
          Deposito
        </TabItemNavigator>
        <TabItemNavigator isActive={activeTab === 'sell'} onClick={handleTab2}>
          Saque
        </TabItemNavigator>
      </TabNavigation>
    </Tab>
  );
}
export default Tabs;
