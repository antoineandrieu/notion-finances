import { useEffect, useState } from 'react';
import { useSessionContext } from '../contexts/SessionContext';

const UserAgreement = () => {
  const { bank, setRequisitionId } = useSessionContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const body = JSON.stringify({ bank: bank });
        const response = await fetch('/api/agreements', {
          method: 'POST',
          body,
        });
        const data = await response.json();
        setRequisitionId(data.data.requisitionId);
        window.location.href = data.data.link;
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return null;
};

export default UserAgreement;
