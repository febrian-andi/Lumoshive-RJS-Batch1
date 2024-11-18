import { useState, useEffect } from 'react';
import subscribeService from 'api/services/subscribeService';

const useSubscribe = () => {
  const [Subscribes, setSubscribes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscribe = async () => {
      try {
        const response = await subscribeService(); // Panggil layanan SubscribeService
        setSubscribes(response.data || []); // Pastikan data tidak kosong
        setLoading(false);
      } catch (err) {
        // Tangani error yang diterima dari service
        console.error('Error:', err.message); // Log error yang terjadi
        setError(err.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchSubscribe();
  }, []);

  return { Subscribes, loading, error };
};

export default useSubscribe;
