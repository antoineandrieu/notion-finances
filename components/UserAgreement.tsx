import React, { FC, useEffect, useState } from 'react';
import { useSessionContext } from '../contexts/SessionContext';

const UserAgreement = () => {
  const { bank } = useSessionContext();

  useEffect(() => {
    console.log(bank);
  }, []);

  return null;
};

export default UserAgreement;
