import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RegisterForm = ({
  formData,
  error,
  onHandleSubmit,
  onHandleChange,
  loading,
  success,
}) => {
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onHandleSubmit}>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="name"
        >
          Your name
        </label>
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="name"
          name="name"
          placeholder="John Doe"
          type="text"
          value={formData.name}
          onChange={onHandleChange}
        />
      </div>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="username"
        >
          Your Username
        </label>
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="username"
          name="username"
          placeholder="Username"
          type="text"
          value={formData.username}
          onChange={onHandleChange}
        />
      </div>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="password"
          name="password"
          placeholder="••••••••"
          required=""
          type="password"
          value={formData.password}
          onChange={onHandleChange}
        />
      </div>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}

      <button
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="submit"
      >
        {loading ? 'Loading...' : 'Create an account'}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{' '}
        <Link
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          to="/"
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

RegisterForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  error: PropTypes.string,
  onHandleSubmit: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.string,
};

export default RegisterForm;
