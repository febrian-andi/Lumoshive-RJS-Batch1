import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ isSidebarOpen, toggleSidebar, onLogout }) => {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuItems = [
    {
      title: 'Overview',
      path: '/dashboard',
      key: 'overview',
      hasSubMenu: false,
    },
    {
      title: 'About Us',
      path: '/dashboard/about-us',
      key: 'aboutUs',
      hasSubMenu: false,
    },
    {
      title: 'Articles',
      path: '/dashboard/articles',
      key: 'articles',
      hasSubMenu: true,
      subMenu: ['list', 'add'],
    },
    {
      title: 'Contact',
      path: '/dashboard/contact',
      key: 'contact',
      hasSubMenu: false,
    },
    {
      title: 'Expertise',
      path: '/dashboard/expertise',
      key: 'expertise',
      hasSubMenu: true,
      subMenu: ['list', 'add'],
    },
    {
      title: 'Portfolio',
      path: '/dashboard/portfolio',
      key: 'portfolio',
      hasSubMenu: true,
      subMenu: ['list', 'add'],
    },
    {
      title: 'Subscribe',
      path: '/dashboard/subscribe',
      key: 'subscribe',
      hasSubMenu: false,
    },
    {
      title: 'Team',
      path: '/dashboard/team',
      key: 'team',
      hasSubMenu: true,
      subMenu: ['list', 'add'],
    },
    {
      title: 'Testimonials',
      path: '/dashboard/testimonials',
      key: 'testimonials',
      hasSubMenu: true,
      subMenu: ['list', 'add'],
    },
    {
      title: 'What We Do',
      path: '/dashboard/what-we-do',
      key: 'whatWeDo',
      hasSubMenu: true,
      subMenu: ['list', 'add'],
    },
  ];

  const renderSubMenu = (basePath, subMenu) => (
    <ul className="py-2 space-y-2">
      {subMenu.includes('list') && (
        <li>
          <Link
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
            to={`${basePath}`}
          >
            List
          </Link>
        </li>
      )}
      {subMenu.includes('add') && (
        <li>
          <Link
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
            to={`${basePath}/add`}
          >
            Add
          </Link>
        </li>
      )}
    </ul>
  );

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              onClick={toggleSidebar}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a
              className="flex items-center justify-between mr-4"
              href="https://flowbite.com"
            >
              <img
                alt="Flowbite Logo"
                className="mr-3 h-8"
                src="https://flowbite.s3.amazonaws.com/logo.svg"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              type="button"
              onClick={onLogout}
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>
      {isSidebarOpen && (
        <aside
          aria-label="Sidenav"
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } bg-white border-r border-gray-200 dark:bg-gray-800`}
          id="drawer-navigation"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.key}>
                  {!item.hasSubMenu ? (
                    <Link
                      className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        aria-controls={`dropdown-${item.key}`}
                        className="flex items-center py-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        type="button"
                        onClick={() => toggleDropdown(item.key)}
                      >
                        <span className="flex-1 ml-2 text-left whitespace-nowrap">
                          {item.title}
                        </span>
                        <svg
                          aria-hidden="true"
                          className={`w-6 h-6 transition-transform ${
                            dropdowns[item.key] ? 'rotate-180' : ''
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      {dropdowns[item.key] &&
                        renderSubMenu(item.path, item.subMenu)}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
      );
    </>
  );
};

Navigation.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navigation;
