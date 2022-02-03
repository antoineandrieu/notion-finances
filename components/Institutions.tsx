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
        console.log(response);
      } catch (error) {
        console.error('An error occurred:', error);
        {
          /* setError(error); */
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Institutions</h1>
    </div>
  );
};

export default Institutions;
