import { useState, useEffect } from 'react';
import contactService from 'api/services/contactService';

const useContact = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await contactService(); // Panggil layanan contactService
        setMessages(response.data || []); // Pastikan data tidak kosong
        setLoading(false);
      } catch (err) {
        // Tangani error yang diterima dari service
        console.error('Error:', err.message); // Log error yang terjadi
        setError(err.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  return { messages, loading, error };
};

export default useContact;
