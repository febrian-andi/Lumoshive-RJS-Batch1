import React from 'react';

const Table = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        {/* Start coding here */}

        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label className="sr-only" htmlFor="simple-search">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    id="simple-search"
                    placeholder="Search"
                    required=""
                    type="text"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                type="button"
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
                Add product
              </button>
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  data-dropdown-toggle="actionsDropdown"
                  id="actionsDropdownButton"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className="-ml-1 mr-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      fillRule="evenodd"
                    />
                  </svg>
                  Actions
                </button>
                <div
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="actionsDropdown"
                >
                  <ul
                    aria-labelledby="actionsDropdownButton"
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  >
                    <li>
                      <a
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        href="#"
                      >
                        Mass Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      href="#"
                    >
                      Delete all
                    </a>
                  </div>
                </div>
                <button
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  data-dropdown-toggle="filterDropdown"
                  id="filterDropdownButton"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 mr-2 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      fillRule="evenodd"
                    />
                  </svg>
                  Filter
                  <svg
                    aria-hidden="true"
                    className="-mr-1 ml-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                  id="filterDropdown"
                >
                  <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Choose brand
                  </h6>
                  <ul
                    aria-labelledby="filterDropdownButton"
                    className="space-y-2 text-sm"
                  >
                    <li className="flex items-center">
                      <input
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        id="apple"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        htmlFor="apple"
                      >
                        Apple (56)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        id="fitbit"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        htmlFor="fitbit"
                      >
                        Microsoft (16)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        id="razor"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        htmlFor="razor"
                      >
                        Razor (49)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        id="nikon"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        htmlFor="nikon"
                      >
                        Nikon (12)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        id="benq"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        htmlFor="benq"
                      >
                        BenQ (74)
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3" scope="col">
                    Product name
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Category
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Brand
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Description
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Price
                  </th>
                  <th className="px-4 py-3" scope="col">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td className="px-4 py-3">PC</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">300</td>
                  <td className="px-4 py-3">$2999</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      id="apple-imac-27-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="apple-imac-27-dropdown"
                    >
                      <ul
                        aria-labelledby="apple-imac-27-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    Apple iMac 20&#34;
                  </th>
                  <td className="px-4 py-3">PC</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">200</td>
                  <td className="px-4 py-3">$1499</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="apple-imac-20-dropdown"
                      id="apple-imac-20-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="apple-imac-20-dropdown"
                    >
                      <ul
                        aria-labelledby="apple-imac-20-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    Apple iPhone 14
                  </th>
                  <td className="px-4 py-3">Phone</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">1237</td>
                  <td className="px-4 py-3">$999</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="apple-iphone-14-dropdown"
                      id="apple-iphone-14-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="apple-iphone-14-dropdown"
                    >
                      <ul
                        aria-labelledby="apple-iphone-14-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    Apple iPad Air
                  </th>
                  <td className="px-4 py-3">Tablet</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">4578</td>
                  <td className="px-4 py-3">$1199</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="apple-ipad-air-dropdown"
                      id="apple-ipad-air-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="apple-ipad-air-dropdown"
                    >
                      <ul
                        aria-labelledby="apple-ipad-air-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    Xbox Series S
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3">Microsoft</td>
                  <td className="px-4 py-3">56</td>
                  <td className="px-4 py-3">$299</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="xbox-series-s-dropdown"
                      id="xbox-series-s-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="xbox-series-s-dropdown"
                    >
                      <ul
                        aria-labelledby="xbox-series-s-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    PlayStation 5
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3">Sony</td>
                  <td className="px-4 py-3">78</td>
                  <td className="px-4 py-3">$799</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="playstation-5-dropdown"
                      id="playstation-5-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="playstation-5-dropdown"
                    >
                      <ul
                        aria-labelledby="playstation-5-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    Xbox Series X
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3">Microsoft</td>
                  <td className="px-4 py-3">200</td>
                  <td className="px-4 py-3">$699</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="xbox-series-x-dropdown"
                      id="xbox-series-x-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="xbox-series-x-dropdown"
                    >
                      <ul
                        aria-labelledby="xbox-series-x-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    Apple Watch SE
                  </th>
                  <td className="px-4 py-3">Watch</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">657</td>
                  <td className="px-4 py-3">$399</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="apple-watch-se-dropdown"
                      id="apple-watch-se-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="apple-watch-se-dropdown"
                    >
                      <ul
                        aria-labelledby="apple-watch-se-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    NIKON D850
                  </th>
                  <td className="px-4 py-3">Photo</td>
                  <td className="px-4 py-3">Nikon</td>
                  <td className="px-4 py-3">465</td>
                  <td className="px-4 py-3">$599</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="nikon-d850-dropdown"
                      id="nikon-d850-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="nikon-d850-dropdown"
                    >
                      <ul
                        aria-labelledby="nikon-d850-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    Monitor BenQ EX2710Q
                  </th>
                  <td className="px-4 py-3">TV/Monitor</td>
                  <td className="px-4 py-3">BenQ</td>
                  <td className="px-4 py-3">354</td>
                  <td className="px-4 py-3">$499</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      data-dropdown-toggle="benq-ex2710q-dropdown"
                      id="benq-ex2710q-dropdown-button"
                      type="button"
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
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="benq-ex2710q-dropdown"
                    >
                      <ul
                        aria-labelledby="benq-ex2710q-dropdown-button"
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      >
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href="#"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          href="#"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            aria-label="Table navigation"
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  href="#"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  href="#"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  href="#"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  href="#"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  href="#"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  href="#"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Table;
