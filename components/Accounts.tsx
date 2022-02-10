import React, { FC, useEffect, useState } from 'react';
import { useSessionContext } from '../contexts/SessionContext';

const Banks = () => {
  const { requisitionId, setAccountId } = useSessionContext();
  console.log('ban', requisitionId);

  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [tempAccountId, setTempAccountId] = useState('');

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const body = JSON.stringify({ requisitionId });
        const response = await fetch('/api/accounts', {
          method: 'POST',
          body,
        });
        const data = await response.json();
        setAccounts(data.data);
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAccountId(tempAccountId);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const account = accounts.filter((item) => {
      return item.name == event.target.value;
    });
    setSelectedAccount(event.target.value);
    setTempAccountId(account[0]?.id);
  };

  return !isLoading ? (
    <div>
      <h1>accounts</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedAccount} onChange={handleChange}>
          <option>Select an account</option>
          {accounts.map((account) => (
            <option key={account.id}>{account.name}</option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  ) : null;
};

export default Banks;
