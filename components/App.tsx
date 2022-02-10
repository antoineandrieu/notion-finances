import React, { useEffect, useState } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import Banks from './Banks';
import UserAgreement from './UserAgreement';

const App = () => {
  const [bank, setBank] = useState('');
  const [step, setStep] = useState('');
  const [, setLastStep] = useState('');

  useEffect(() => {
    console.log(bank);
    if (bank) {
      setStep('userAgreement');
      setLastStep('banks');
    } else {
      setStep('banks');
      setLastStep('banks');
    }
  }, [bank]);

  const render = () => {
    switch (step) {
      case 'banks':
        return <Banks />;
      case 'userAgreement':
        return <UserAgreement />;
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
      }}
    >
      <div>{render()}</div>
    </SessionContext.Provider>
  );
};

export default App;
