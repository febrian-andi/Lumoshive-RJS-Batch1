import React from "react";
import Typography from "./Typography";
import Article1 from "../assets/AssetsBlogPages/Article1.png";
import Article2 from "../assets/AssetsBlogPages/Article2.png";
import Article3 from "../assets/AssetsBlogPages/Article3.png";
import Person1 from "../assets/AssetsBlogPages/Person1.png";
import Person2 from "../assets/AssetsBlogPages/Person2.png";
import Person3 from "../assets/AssetsBlogPages/Person3.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Data object
const articles = [
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Ranold Jeff",
    person: Person2,
    img: Article1,
  },
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Patricia Anderson",
    person: Person1,
    img: Article2,
  },
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Elaine Luna",
    person: Person3,
    img: Article3,
  },
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Ranold Jeff",
    person: Person2,
    img: Article1,
  },
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Patricia Anderson",
    person: Person1,
    img: Article2,
  },
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Elaine Luna",
    person: Person3,
    img: Article3,
  },
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Ranold Jeff",
    person: Person2,
    img: Article1,
  },
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Patricia Anderson",
    person: Person1,
    img: Article2,
  },
  {
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    name: "Elaine Luna",
    person: Person3,
    img: Article3,
  },
];

// Component
export default function BlogListCard({ maxPosts }) {
  const displayedArticles = maxPosts ? articles.slice(0, maxPosts) : articles;
  return (
    <div>
      <div className="text-center pt-20">
        {/* Tagline */}
        <Typography
          variant="strong"
          color="text-peach-red-100"
          className="mb-2 font-bold"
        >
          \Our Blogs\
        </Typography>

        {/* Title */}
        <Typography
          variant="h2"
          color="text-dark-blue-100"
          className="text-5xl mb-4 mt-4"
        >
          Latest Post
        </Typography>
      </div>

      {/* Grid Layout for Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto px-10 py-10">
        {/* looping to retrieve data */}
        {displayedArticles.map((article, index) => (
          <Link
            key={index}
            className="flex flex-col h-fit rounded-lg shadow-md shadow-[#252525]-20 justify-center p-5 hover:shadow-peach-red-50"
          >
            <img
              src={article.img}
              className="w-full h-[200px] object-cover rounded-lg"
              alt={article.title}
            />
            <div className="flex flex-col pt-4">
              <h3 className="text-xl font-bold text-peach-red-100 mt-2">
                {article.title}
              </h3>
              <div className="flex flex-row justify-between items-center mt-5">
                <div className="flex flex-row gap-3 items-center">
                  <img
                    src={article.person}
                    className="w-8 h-8 rounded-full"
                    alt={article.name}
                  />
                  <p className="font-bold text-sm">{article.name}</p>
                </div>
                <span className="text-xs font-bold text-gray-500">
                  {article.date}
                </span>
              </div>
            </div>
          </Link>
        ))}
        {/* looping to retrieve data end */}
      </div>
    </div>
  );
}

BlogListCard.propTypes = {
  maxPosts: PropTypes.number,
};
