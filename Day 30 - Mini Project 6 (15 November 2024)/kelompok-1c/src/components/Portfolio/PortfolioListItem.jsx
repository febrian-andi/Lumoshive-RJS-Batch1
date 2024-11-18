import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDeleteData from '../../hooks/useDeleteData';

const PortfolioListItem = ({ portfolio, fetchPortfolios }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const handleNavigationToDetail = () => {
    navigate(`/dashboard/portfolio/${portfolio.id}`, {
      state: portfolio,
    });
  };
  
  const handleNavigationToEdit = () => {
    navigate(`/dashboard/portfolio/edit/${portfolio.id}`, {
      state: portfolio,
    });
  };

  // delete data
  const { deleteData, loading } = useDeleteData();

  const handleDelete = (id) => {
    deleteData(`/api/portfolio/${id}`, fetchPortfolios)
  };

  return (
    <tr className="border-b dark:border-gray-700">
      <td className="px-4 py-3">{portfolio.date}</td>
      <td className="px-4 py-3">{portfolio.title}</td>
      <td className="px-4 py-3">{portfolio.content}</td>
      <td className="px-4 py-3 flex items-center justify-center">
        <button
          className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
          onBlur={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
        <div
          onMouseDown={(e) => e.preventDefault()}
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute right-0 bottom-10 z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul
            aria-labelledby="apple-imac-27-dropdown-button"
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
          >
            <li>
              <button
                className="w-full text-start py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleNavigationToDetail(portfolio.id)}
              >
                Detail
              </button>
            </li>
            <li>
              <button
                className="w-full text-start py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleNavigationToEdit(portfolio.id)}
              >
                Edit
              </button>
            </li>
          </ul>
          <div className="py-1">
            <button
              className={`${
                loading ? 'cursor-not-allowed' : 'cursor-pointer'
              } w-full text-start py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}
              onClick={() => handleDelete(portfolio.id)}
              disabled={loading}
            >
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default PortfolioListItem;

