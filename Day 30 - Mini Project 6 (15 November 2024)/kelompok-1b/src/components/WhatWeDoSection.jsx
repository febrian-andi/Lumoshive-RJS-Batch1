import React from "react";
import visionIcon from "../assets/what-we-do-1.png";
import goalIcon from "../assets/what-we-do-2.png";
import heroImg from "../assets/what-we-do-hero.png";
import Typography from "./Typography";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const WhatWeDoSection = ({ showButton }) => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-off-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 mx-auto px-4">
        {/* image */}
        <div>
          <img
            src={heroImg}
            alt="what We Do"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* image end */}

        <div>
          {/* tagline */}
          <Typography
            variant="strong"
            color="text-peach-red-100"
            className="mb-2 font-bold"
          >
            \ What We Do \
          </Typography>
          {/* tagline end */}

          {/* title */}
          <Typography
            variant="h2"
            color="text-dark-blue-100"
            className="text-5xl mb-4 mt-4"
          >
            We Develope Product That People Love to Use.
          </Typography>
          {/* title end */}

          {/* description */}
          <Typography variant="bodycopy" className="text-lg leading-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, of a page when looking at its
            layout. The point of using Lorem Ipsum is that of a page when
            looking at its layout. The point of using Lorem Ipsum is thatLorem
            Ipsum is that it has a more-or-less normalLorem IpsumLorem Ipsum
            distribution of letters, as opposed
          </Typography>
          {/* description end */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-5">
              <div className="p-3.5 bg-peach-red-10 rounded-[10px] w-fit">
                <img src={visionIcon} alt="icon" className="w-12 " />
              </div>

              <div>
                <Typography
                  variant="strong"
                  color="text-peach-red-100"
                  className="text-lg"
                >
                  Our Vision
                </Typography>
                <p className="text-sm text-dark-blue-100">
                  It is a long established fact that
                </p>
              </div>
            </div>

            <div className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-0 md:mt-5">
              <div className="p-3.5 bg-peach-red-10 rounded-[10px] w-fit">
                <img src={goalIcon} alt="icon" className="w-12 " />
              </div>

              <div className="">
                <Typography
                  variant="strong"
                  color="text-peach-red-100"
                  className="text-lg"
                >
                  Our Vision
                </Typography>
                <p className="text-sm text-dark-blue-100">
                  It is a long established fact that
                </p>
              </div>
            </div>
          </div>
          {showButton && (
            <button
              className="bg-peach-red-100 hover:bg-red-600 text-white py-[10px] px-[20px] mt-[30px] rounded-md w-fit"
              onClick={() => handleNavigation("/our-services")}
            >
              View More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

WhatWeDoSection.propTypes = {
  showButton: PropTypes.bool,
};

export default WhatWeDoSection;
