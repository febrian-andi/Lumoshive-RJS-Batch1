import React from 'react';

const AboutUsList = ({ data, loading, error }) => {
  return (
    <div className="flex justify-center px-8 py-8">
      {loading && (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
          Loading...
        </div>
      )}

      {error && <div className="text-red-500 text-center">{error.message}</div>}

      {!loading && error === null && Object.keys(data).length === 0 && (
        <div className="text-center">No data found</div>
      )}

      {!loading && error === null && Object.keys(data).length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <img src={data.imageUrl} alt={data.title} className="w-96 mx-auto" />
          <div className="mt-2 lg:mt-0">
            <h1 className="text-2xl font-extrabold mb-3 text-center lg:text-start">
              {data.title}
            </h1>
            <p className="text-base font-light text-justify">{data.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsList;
