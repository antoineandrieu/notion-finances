import React, { useState } from 'react';

export type SessionContextType = {
  bank: string;
  setBank: (bank: string) => void;
};

export const SessionContext = React.createContext<SessionContextType>({
  bank: '',
  setBank: () => '',
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

  const sessionValue = {
    bank,
    setBank,
  };

  return <SessionContext.Provider value={sessionValue} {...props} />;
}

export { SessionContextProvider, useSessionContext };
