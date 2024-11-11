import React from "react";
import PropTypes from "prop-types";

function ItemCard({ article }) {
  return (
    <div className="hover:text-sky-500">
      <img
        src={article.image}
        alt="Behind the Scene"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="font-medium mt-2 line-clamp-2">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm">{article.created_at}</p>
    </div>
  );
}

export default ItemCard;

ItemCard.propTypes = {
  article: PropTypes.object.isRequired
};
