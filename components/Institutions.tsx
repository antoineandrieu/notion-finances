import React, { FC, useEffect, useState } from 'react';
import { useSessionContext } from '../contexts/SessionContext';

const Institutions = () => {
  const { setInstitution } = useSessionContext();

  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [institutionId, setInstitutionId] = useState('');

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await fetch('/api/institutions');
        const data = await response.json();
        setInstitutions(data.data);
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInstitution(institutionId);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const institution = institutions.filter((item) => {
      return item.name == event.target.value;
    });
    setSelectedInstitution(event.target.value);
    setInstitution(event.target.value);
    setInstitutionId(institution[0].id);
  };

  return (
    !isLoading && (
      <div>
        <h1>Institutions</h1>
        <form onSubmit={handleSubmit}>
          <select value={selectedInstitution} onChange={handleChange}>
            <option>Select an institution</option>
            {institutions.map((institution) => (
              <option key={institution.id}>{institution.name}</option>
            ))}
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  );
};

export default Institutions;
