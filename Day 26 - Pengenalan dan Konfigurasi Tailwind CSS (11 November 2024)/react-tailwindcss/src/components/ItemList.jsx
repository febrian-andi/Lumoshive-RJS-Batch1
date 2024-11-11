import React, { useState } from "react";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function ItemList({ category, article }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = article.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(article.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="mt-8">
      <h2 className="text-base border-b-2 border-green-500 text-white">
        <span className="bg-green-500 px-3 py-1">{category}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {currentItems.map((item, index) => (
          <ItemCard key={index} article={item} />
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="border-2 border-gray-200 text-gray-600 h-8 w-8 mr-2 :hover:border-green-500 hover:bg-green-500 hover:text-white"
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="h-4 w-4 inline-block" />
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="border-2 border-gray-200 text-gray-600 h-8 w-8 :hover:border-green-500 hover:bg-green-500 hover:text-white"
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon className="h-4 w-4 inline-block" />
        </button>
      </div>
    </section>
  );
}

export default ItemList;

ItemList.propTypes = {
  category: PropTypes.string.isRequired,
  article: PropTypes.array.isRequired,
};
