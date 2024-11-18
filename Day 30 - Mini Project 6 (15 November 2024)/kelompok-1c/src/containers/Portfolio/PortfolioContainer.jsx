import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioList from 'components/Portfolio/PortfolioList';
import useFetchData from 'hooks/useFetchData';

const PortfolioContainer = () => {

  //Fetch Portfolio Data
  const { data: portfolios, loading, error, fetchData: fetchPortfolios } = useFetchData('/api/portfolio');

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Portofolio List
              </h1>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Link
                to="/dashboard/portfolio/add"
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
                Add portfolio
              </Link>
            </div>
          </div>
          <PortfolioList
            portfolios={portfolios}
            loading={loading}
            error={error}
            fetchPortfolios={fetchPortfolios}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioContainer;
