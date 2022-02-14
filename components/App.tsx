import React, { useEffect, useState } from 'react';
import { SessionContext, useSessionContext } from '../contexts/SessionContext';

import styled from 'styled-components';
import Banks from './Banks';
import Accounts from './Accounts';
import Transactions from './Transactions';
import UserAgreement from './UserAgreement';

const StyledApp = styled.div`
  background-color: #333333;
`;

const App = () => {
  {
    /* const { accountId } = useSessionContext(); */
  }

  const [bank, setBank] = useState('');
  const [requisitionId, setRequisitionId] = useState('');
  const [accountId, setAccountId] = useState('');
  const [step, setStep] = useState('');
  const [, setLastStep] = useState('');

  let sessionStorage;
  if (typeof window !== 'undefined') {
    sessionStorage = window.sessionStorage;
  }

  useEffect(() => {
    const requisitionId = sessionStorage.getItem('requisitionId');
    if (accountId) {
      setStep('transactions');
      setLastStep('accounts');
      return;
    }
    if (requisitionId) {
      setRequisitionId(requisitionId);
      setStep('accounts');
      setLastStep('userAgreement');
      return;
    }
    if (bank) {
      setStep('userAgreement');
      setLastStep('banks');
      return;
    }
    setStep('banks');
    setLastStep('banks');
  }, [accountId, requisitionId, bank]);

  const render = () => {
    switch (step) {
      case 'transactions':
        return <Transactions />;
      case 'banks':
        return <Banks />;
      case 'userAgreement':
        return <UserAgreement />;
      case 'accounts':
        return <Accounts />;
      default:
        return null;
    }
  };

  return (
    <SessionContext.Provider
      value={{
        bank,
        setBank: (bank) => {
          setBank(bank);
        },
        requisitionId,
        setRequisitionId: (requisitionId) => {
          setRequisitionId(requisitionId);
          sessionStorage.setItem('requisitionId', requisitionId);
        },
        accountId,
        setAccountId: (accountId) => {
          setAccountId(accountId);
        },
      }}
    >
      <StyledApp>{render()}</StyledApp>
    </SessionContext.Provider>
  );
};

export default App;
