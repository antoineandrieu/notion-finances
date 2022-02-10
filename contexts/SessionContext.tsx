import React, { useState } from 'react';

export type SessionContextType = {
  bank: string;
  setBank: (bank: string) => void;
  requisitionId: string;
  setRequisitionId: (requisitionId: string) => void;
  accountId: string;
  setAccountId: (accountId: string) => void;
};

export const SessionContext = React.createContext<SessionContextType>({
  bank: '',
  setBank: () => '',
  requisitionId: '',
  setRequisitionId: () => '',
  accountId: '',
  setAccountId: () => '',
});

function useSessionContext() {
  const context = React.useContext(SessionContext);
  if (!context) {
    throw new Error(
      `useSessionContext must be used within a SessionContextProvider`
    );
  }
  return context;
}

function SessionContextProvider(props: React.PropsWithChildren<{}>) {
  const [bank, setBank] = useState('');
  const [requisitionId, setRequisitionId] = useState('');
  const [accountId, setAccountId] = useState('');

  const sessionValue = {
    bank,
    setBank,
    requisitionId,
    setRequisitionId,
    accountId,
    setAccountId,
  };

  return <SessionContext.Provider value={sessionValue} {...props} />;
}

export { SessionContextProvider, useSessionContext };
