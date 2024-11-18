import { useState } from "react";
import subscribeService from "../api/services/subscribeService";
import DOMPurify from "dompurify";

const useSubscribeForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Sanitize the input before updating the state
    const sanitizedValue = DOMPurify.sanitize(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const subscribeData = {
      email: DOMPurify.sanitize(formData.email),
    };

    try {
      const response = await subscribeService(subscribeData); 
      setSuccess(true);
      setFormData({ email: ""}); // Reset form after success
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    success,
  };
};

export default useSubscribeForm;
