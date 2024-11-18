import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const metaTag = data.meta_tag.join(', ');

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
            {data.title}
          </h2>
          <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{metaTag}</p>
          <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{data.date} - {data.writer}</p>
          <div className="my-8 xl:mb-16 xl:mt-12 flex justify-center">
            <img
              className="w-96 dark:hidden"
              src={data.imageUrl}
              alt={data.title}
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
