import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import LoginForm from 'components/Auth/LoginForm';

import useAuth from '../../hooks/useAuth';

const LoginContainer = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(formData);
    if (!error) {
      navigate('/dashboard');
    }
  };

  return (
    <LoginForm
      error={error}
      formData={formData}
      loading={loading}
      onHandleChange={handleChange}
      onHandleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
