import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({
  formData,
  onHandleChange,
  onHandleSubmit,
  error,
  loading,
}) => {
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onHandleSubmit}>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="email"
        >
          Username
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="username"
          name="username"
          placeholder="Enter your username"
          required=""
          type="username"
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
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="password"
          name="password"
          placeholder="••••••••"
          required=""
          type="password"
          value={formData.password}
          onChange={onHandleChange}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="submit"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{' '}
        <Link
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          to="/register"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

LoginForm.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default LoginForm;
