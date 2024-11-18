import { useState } from "react";
import ContactService from "../api/services/contactService";
import DOMPurify from "dompurify";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

    const contactData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      phone: DOMPurify.sanitize(formData.phone),
      message: DOMPurify.sanitize(formData.message),
    };

    try {
      const response = await ContactService(contactData); 
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form after success
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

export default useContactForm;
