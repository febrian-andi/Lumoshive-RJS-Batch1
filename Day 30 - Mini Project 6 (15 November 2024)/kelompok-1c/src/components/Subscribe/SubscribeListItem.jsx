import React, { useState } from 'react';
import useSubscribe from 'hooks/useSubscribe';
import SubscribeDetail from './SubscribeDetail';

const SubscribeListItem = () => {
  // State untuk mengontrol modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubscribe, setSelectedSubscribe] = useState(null); // Menyimpan data kontak yang dipilih

  // Panggil custom hook untuk mengambil data kontak
  const { Subscribes, loading, error } = useSubscribe();

  // Fungsi untuk membuka modal dan menyimpan data kontak
  const toggleModal = (subscribe = null) => {
    setSelectedSubscribe(subscribe); // Simpan data kontak yang dipilih
    setIsModalOpen(!isModalOpen);
  };

  if (loading) return <p>Loading subscribe...</p>;
  if (error) return
  <p>Error: {error}</p>;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
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
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    required=""
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3 w-full">Email</th>
                </tr>
              </thead>
              <tbody>
                {Subscribes.map((subscribe) => (
                  <tr key={subscribe.id} className="border-b dark:border-gray-700">
                    
                    <td className="px-4 py-3">{subscribe.email}</td>
                    <td className="px-4 py-3 flex items-center justify-center">
                      <button
                        className="inline-flex items-center p-0.5 text-sm font-medium text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                        type="button"
                        onClick={() => toggleModal(subscribe)}
                      >
                        <svg
                          className="feather feather-info"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" x2="12" y1="16" y2="12" />
                          <line x1="12" x2="12.01" y1="8" y2="8" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Modal yang diaktifkan oleh state */}
          {isModalOpen && (
            <SubscribeDetail contact={selectedSubscribe} onClose={toggleModal} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SubscribeListItem;
