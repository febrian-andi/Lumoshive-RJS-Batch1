import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAddData from '../../hooks/useAddData';
import useUpdateData from '../../hooks/useUpdateData';

const PortfolioForm = ({ isEdit, portfolio }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: '',
    title: isEdit ? portfolio.title : '',
    date: isEdit ? portfolio.date : '',
    content: isEdit ? portfolio.content : '',
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };
 
  // use custom hooks for add data
  const { addData, loading: addLoading } = useAddData('/api/portfolio');

  //use custom hooks for edit data
  const { updateData, loading: updateLoading } = useUpdateData(`/api/portfolio/${portfolio.id}`);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEdit && !formData.image) {
      alert('Please upload an image.');
      return;
    }

    const data = new FormData();
    data.append('image', formData.image);
    data.append('title', formData.title);
    data.append('date', formData.date);
    data.append('content', formData.content);

    if (isEdit) {
      updateData(data, () => {
        navigate('/dashboard/portfolio');
      });
    } else {
      addData(data, () => {
        navigate('/dashboard/portfolio');
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {isEdit ? 'Edit' : 'Add'} a portfolio
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Thumbnail Image
              </label>
              <input
                type="file"
                accept=".jpg, .png, .jpeg, .webp"
                name="image"
                onChange={handleChange}
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your content here"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => navigate(-1)}
              className="mt-4 flex items-center justify-center px-5 py-2.5 mt-4 text-sm font-medium text-red-600 border-2 border-red-600 mr-2 rounded-lg hover:bg-red-700 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex items-center justify-center px-5 py-2.5 mt-4 text-sm font-medium text-white rounded-lg ${
                addLoading || updateLoading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={addLoading || updateLoading}
            >
              {addLoading || updateLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Loading...
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PortfolioForm;
