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

  return transactions.length ? (
    <div>
      <h1>transactions</h1>
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
