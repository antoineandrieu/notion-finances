import React, { useState } from 'react';

export type SessionContextType = {
  institution: string;
  setInstitution: (institution: string) => void;
};

export const SessionContext = React.createContext<SessionContextType>({
  institution: '',
  setInstitution: () => '',
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
  const [institution, setInstitution] = useState('');

  const sessionValue = {
    institution,
    setInstitution,
  };

  return <SessionContext.Provider value={sessionValue} {...props} />;
}

export { SessionContextProvider, useSessionContext };
