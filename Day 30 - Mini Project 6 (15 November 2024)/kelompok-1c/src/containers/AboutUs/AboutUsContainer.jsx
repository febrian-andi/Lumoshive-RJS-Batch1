import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFetchData from 'hooks/useFetchData';
import AboutUsList from 'components/AboutUs/AboutUsList';

const Button = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigationToEdit = () => {
    navigate(`/dashboard/about-us/edit`, {
      state: data,
    });
  };

  return Object.keys(data).length > 0 ? (
    <button
      onClick={handleNavigationToEdit}
      className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="h-3.5 w-3.5 mr-2"
        viewBox="0 0 20 20"
      >
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
      </svg>
      Edit about us
    </button>
  ) : (
    <Link
      to="/dashboard/about-us/add"
      className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    >
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          fillRule="evenodd"
        />
      </svg>
      Add about us
    </Link>
  );
};

const AboutUsContainer = () => {
  //fetch about us data
  const { data, loading, error } = useFetchData('/api/about-us');

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                About Us
              </h1>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Button data={data}/>
            </div>
          </div>
          <AboutUsList data={data} loading={loading} error={error} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsContainer;
