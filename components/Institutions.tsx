import React, { FC, useEffect, useState } from 'react';

const Institutions = () => {
  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('use effect');
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

  return (
    !isLoading && (
      <div>
        <h1>Institutions</h1>
        <select>
          <option>Select an institution</option>
          {institutions.map((institution) => (
            <option key={institution.id}>{institution.name}</option>
          ))}
        </select>
      </div>
    )
  );
};

export default Institutions;
