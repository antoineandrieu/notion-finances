import React, { FC, useEffect, useState } from 'react';
import { useSessionContext } from '../contexts/SessionContext';

const Transactions = () => {
  const { accountId } = useSessionContext();

  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const body = JSON.stringify({ accountId });
        const response = await fetch('/api/transactions', {
          method: 'POST',
          body,
        });
        const data = await response.json();
        setTransactions(data.data.booked);
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const createDatabase = async () => {
    try {
      const response = await fetch('/api/notion', {
        method: 'POST',
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const updateDatabase = async () => {
    try {
      const body = JSON.stringify({ accountId });
      const response = await fetch('/api/notion', {
        method: 'PATCH',
        body,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return transactions.length ? (
    <div>
      <h1>Exprot transactions</h1>
      <button onClick={() => createDatabase()}>Create a new database</button>
      <button onClick={() => updateDatabase()}>
        Update an existing database
      </button>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.transactionId}>
            {transaction.bookingDate} -
            {transaction.remittanceInformationUnstructuredArray[0]} -{' '}
            {transaction.transactionAmount.amount}
            {transaction.transactionAmount.currency}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Transactions;
