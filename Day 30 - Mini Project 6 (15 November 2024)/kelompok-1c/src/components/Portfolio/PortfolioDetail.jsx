import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PortfolioDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const portfolio = location.state;

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <button
            className="border-2 border-rose-500 text-rose-500 hover:text-white hover:bg-rose-500 p-2 rounded-lg font-bold"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <h2 className="text-xl text-center font-semibold text-gray-900 dark:text-white sm:text-2xl">
            {portfolio.title}
          </h2>
          <div className="my-8 xl:mb-16 xl:mt-12 flex justify-center">
            <img
              className="w-96 dark:hidden"
              src={portfolio.imageUrl}
              alt={portfolio.title}
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {portfolio.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;
