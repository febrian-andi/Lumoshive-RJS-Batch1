import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useAddData from 'hooks/useAddData';
import useUpdateData from 'hooks/useUpdateData';

const ArticleForm = ({ isEdit, article }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: '',
    title: isEdit ? article.title : '',
    date: isEdit ? article.date : '',
    content: isEdit ? article.content : '',
    writer: isEdit ? article.writer : '',
    meta_tag: [],
  });

  const availableMetaTags = [
    'Technology',
    'Science',
    'Education',
    'Business',
    'Website',
    'Application',
    'Software',
    'Design',
    'Computer',
    'Digital',
  ];

  // Handle form data change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  // Handle meta tag change
  const handleChangeCategory = (e) => {
    const { checked, value } = e.target;
    setFormData((prevData) => {
      const newTags = checked
        ? [...prevData.meta_tag, value]
        : prevData.meta_tag.filter((t) => t !== value);

      // Ensure the maximum of 5 tags
      if (newTags.length > 5) {
        alert('You can only select up to 5 meta tags.');
        return prevData; // Do not update state if over limit
      }

      return { ...prevData, meta_tag: newTags };
    });
  };

  // Handle CKEditor change
  const handleChangeCkeditor = (e, editor) => {
    const data = editor.getData();
    setFormData((prevData) => ({
      ...prevData,
      content: data,
    }));
  }

  // use custom hooks for add data
  const { addData, loading: addLoading } = useAddData('/api/article');

  //use custom hooks for edit data
  const { updateData, loading: updateLoading } = useUpdateData(
    `/api/article/${article.id}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEdit && !formData.image) {
      alert('Please upload an image.');
      return;
    }

    if (formData.meta_tag.length === 0) {
      alert('Please select at least one category tag.');
      return;
    }

    // input meta_title & meta_desc
    const autoMetaTitle = formData.title || 'Default Meta Title';
    const autoMetaDesc = formData.content
      ? formData.content.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 150)
      : 'Default Meta Description';

    const data = new FormData();
    data.append('image', formData.image);
    data.append('title', formData.title);
    data.append('writer', formData.writer);
    data.append('date', formData.date);
    data.append('content', formData.content);
    data.append('meta_title', autoMetaTitle);
    data.append('meta_desc', autoMetaDesc);
    formData.meta_tag.forEach((tag, index) =>
      data.append(`meta_tag[${index}]`, tag)
    );

    if (isEdit) {
      updateData(data, () => {
        navigate('/dashboard/articles');
      });
    } else {
      addData(data, () => {
        navigate('/dashboard/articles');
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {isEdit ? 'Edit' : 'Add'} a article
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
                placeholder="Enter article title"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Writer
              </label>
              <input
                type="text"
                name="writer"
                value={formData.writer}
                onChange={handleChange}
                id="writer"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter article writer"
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
                htmlFor="meta_tag"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category (Max: 5)
              </label>
              <div className="grid grid-cols-2 gap-4">
                {availableMetaTags.map((tag) => (
                  <div key={tag} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`meta_tag_${tag}`}
                      name="meta_tag"
                      value={tag}
                      checked={formData.meta_tag.includes(tag)}
                      onChange={handleChangeCategory}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`meta_tag_${tag}`}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {tag}
                    </label>
                  </div>
                ))}
              </div>
              {formData.meta_tag.length > 0 && (
                <div className="mt-3 text-sm text-gray-700 dark:text-gray-400">
                  Selected: {formData.meta_tag.join(', ')}
                </div>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={formData.content}
                onChange={handleChangeCkeditor}
                config={{
                  toolbar: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'undo',
                    'redo',
                  ],
                  removePlugins: [
                    'Image',
                    'ImageToolbar',
                    'ImageCaption',
                    'ImageStyle',
                    'ImageUpload',
                    'EasyImage',
                    'CKFinder',
                  ],
                }}
              />
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

export default ArticleForm;
