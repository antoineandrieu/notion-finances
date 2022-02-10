import React, { FC, useEffect, useState } from 'react';
import { useSessionContext } from '../contexts/SessionContext';

const Banks = () => {
  const { setBank } = useSessionContext();

  const [banks, setBanks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedbank, setSelectedbank] = useState('');
  const [bankId, setBankId] = useState('');

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await fetch('/api/banks');
        const data = await response.json();
        setBanks(data.data);
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBank(bankId);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const bank = banks.filter((item) => {
      return item.name == event.target.value;
    });
    setSelectedbank(event.target.value);
    setBank(event.target.value);
    setBankId(bank[0].id);
  };

  return !isLoading ? (
    <div>
      <h1>banks</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedbank} onChange={handleChange}>
          <option>Select an bank</option>
          {banks.map((bank) => (
            <option key={bank.id}>{bank.name}</option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  ) : null;
};

export default Banks;
