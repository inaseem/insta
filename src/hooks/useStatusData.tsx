import React from 'react';
import api from '../api';
import { Status } from '../types';

const useStatusData = (userId: string | null) => {
  const [status, setStatus] = React.useState<Status>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!userId) return;

    setLoading(true);
    setError(null);

    api
      .getStatusByUserId(userId)
      .then((status) => {
        setStatus(status);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  return { loading, error, status };
};

export default useStatusData;
