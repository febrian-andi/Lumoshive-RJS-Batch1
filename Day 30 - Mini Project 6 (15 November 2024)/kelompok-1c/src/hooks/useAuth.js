import React, { useState } from 'react';

import authService from '../api/services/authService';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await authService.login(credentials);
      const { token, role } = response;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
    } catch (error) {
      setError(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      await authService.register(userData);
    } catch (error) {
      setError(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setLoading(true);
    try {
      authService.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/';
    } catch (error) {
      setError(error.message || 'Logout failed');
    } finally {
      setLoading(false);
    }
  };

  return { login, register, logout, loading, error };
};

export default useAuth;
