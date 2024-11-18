import React from "react";
import Article1 from "../assets/AssetsBlogPages/Article1.png";
import Article2 from "../assets/AssetsBlogPages/Article2.png";
import Article3 from "../assets/AssetsBlogPages/Article3.png";
import Person1 from "../assets/AssetsBlogPages/Person1.png";
import Person2 from "../assets/AssetsBlogPages/Person2.png";
import Person3 from "../assets/AssetsBlogPages/Person3.png";
import Typography from "./Typography";
import { Link } from "react-router-dom";

export default function LatestPostSection() {
  return (
    <div>
      <div className="text-center pt-20">
        {/* tagline */}
        <Typography
          variant="strong"
          color="text-peach-red-100"
          className="mb-2 font-bold"
        >
          \Our Blogs\
        </Typography>
        {/* tagline end */}

        {/* title */}
        <Typography
          variant="h2"
          color="text-dark-blue-100"
          className="text-5xl mb-4 mt-4"
        >
          Latest Post
        </Typography>
        {/* title end */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto px-10">
        {/* article 1 */}
        <Link className="flex row-span-2 flex-col h-fit rounded-lg shadow-md shadow-peach-red-25 justify-center p-5 hover:shadow-peach-red-50">
          <div href="" className="w-full group overflow-hidden">
            <img src={Article1} className="w-full object-cover" alt="" />
          </div>
          <div className="flex flex-col text-black">
            <p className="text-xs mt-2 font-bold text-gray-500">
              May 4th, 2022
            </p>
            <h3 className="text-xl font-bold text-peach-red-100 mt-3">
              The most Popular Business Of the Year
            </h3>
            <div className="flex flex-row justify-between items-center mt-3">
              <div className="flex flex-row gap-3 items-center">
                <img src={Person2} />
                <p className="font-bold text-sm">Ranold Jeff</p>
              </div>
              <span className="text-xs">2 Min Read</span>
            </div>
          </div>
        </Link>
        {/* article 1 end */}

        {/* article 2 */}
        <div className="flex flex-col gap-5">
          <Link className=" flex h-fit rounded-lg shadow-md shadow-peach-red-25 justify-center p-5 hover:shadow-peach-red-50">
            <div href="" className="h-full">
              <img
                src={Article2}
                className="h-full object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className=" flex flex-col ps-4">
              <p className="text-xs font-bold text-gray-500">Apr 27th, 2022</p>
              <h3 className="text-xl font-bold text-peach-red-100 mt-5">
                The most Popular Business Of the Year
              </h3>
              <div className="flex flex-row justify-between items-center mt-8">
                <div className="flex flex-row gap-3 items-center">
                  <img src={Person1} />
                  <p className="font-bold text-sm">Patricia Anderson</p>
                </div>
                <span className="text-xs">2 Min Read</span>
              </div>
            </div>
          </Link>
          {/* article 2 end */}

          {/* article 3 */}
          <Link className="flex h-fit rounded-lg shadow-md shadow-peach-red-25 justify-center p-5 hover:shadow-peach-red-50">
            <div href="" className="h-full">
              <img
                src={Article3}
                className="h-full object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className=" flex flex-col ps-4">
              <p className="text-xs font-bold text-gray-500">Apr 27th, 2022</p>
              <h3 className="text-xl font-bold text-peach-red-100 mt-5">
                The most Popular Business Of the Year
              </h3>
              <div className="flex flex-row justify-between items-center mt-8">
                <div className="flex flex-row gap-3 items-center">
                  <img src={Person3} />
                  <p className="font-bold text-sm">Elaine Luna</p>
                </div>
                <span className="text-xs">2 Min Read</span>
              </div>
            </div>
          </Link>
          {/* article 3 end */}
        </div>
      </div>
    </div>
  );
}
