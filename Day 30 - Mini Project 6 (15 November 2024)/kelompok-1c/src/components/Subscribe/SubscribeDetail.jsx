import React from 'react';

const ContactDetail = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full h-screen flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl md:h-auto mx-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="pt-3 pb-3 flex items-center justify-between border-b rounded-t dark:border-gray-600 ps-2 pe-2">
            <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Subscribe Details
            </h3>
            <button
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
              type="button"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M6.293 4.293a1 1 0 011.414 0L10 7.586l2.293-2.293a1 1 0 111.414 1.414L11.414 9l2.293 2.293a1 1 0 11-1.414 1.414L10 10.414l-2.293 2.293a1 1 0 11-1.414-1.414L8.586 9 6.293 6.707a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 pt-2">
            <dl>
              <dt className="mb-2 font-semibold text-gray-900 dark:text-white">
                Email
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400">
                {contact.email}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
