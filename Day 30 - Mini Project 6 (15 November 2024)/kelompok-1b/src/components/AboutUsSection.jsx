import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/AssetsAboutPages/Icon.svg";
import MaskGroup from "../assets/AssetsAboutPages/MaskGroup.png";
import Typography from "./Typography";
import useFetchData from "../hooks/useFetchData";
import { object } from "prop-types";

export default function AboutUsSection() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const { data, loading, error } = useFetchData("/api/about-us");
  console.log(data);

  return (
    <section className="bg-off-white">
      <div className="container mx-auto px-4">
        {(!data && data.length === 0 || Object.keys(data).length === 0) && (
          <>
            <p className="text-3xl font-bold">No data found</p>
            {/* <div className="flex flex-col md:flex-row py-20">
            <div className="">
              <img src={MaskGroup} alt="About Us" className="w-[40rem]" />
            </div>
            <div className="ps-10 mt-8 md:mt-0">
              <Typography
                variant="strong"
                color="text-peach-red-100"
                className="mb-2 font-bold"
              >
                \About Us\
              </Typography>

              <Typography
                variant="h2"
                color="text-dark-blue-100"
                className="text-5xl mb-4 mt-4"
              >
                One of the Fastest Way to Business Growth
              </Typography>

              <Typography variant="bodycopy" className="text-lg leading-6">
                It is a long established fact that a reader will be distracted by
                the <br /> readable content of a page when looking at its layout.
                The point of <br /> using Lorem Ipsum is that it has a
                more-or-less normal distribution <br /> of letters, as opposed.
              </Typography>
              <div
                onClick={() => handleNavigation("/contact")}
                className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-4 cursor-pointer hover:bg-peach-red-10"
              >
                <div className="bg-off-white px-3 py-2 rounded-[10px] flex items-center">
                  <img src={Icon} className="w-[25px]" />
                </div>
                <div className="">
                  <Typography
                    variant="strong"
                    color="text-dark-blue-100"
                    className="text-[14px] md:text-lg"
                  >
                    Get Instant Professional Advice
                  </Typography>
                  <p className="text-sm md:text-sm">
                    Ready to Help:{" "}
                    <span
                      href="tel:+1356787897"
                      className="text-peach-red-100 font-semibold"
                    >
                      +1 356 678 7897
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          </>
        )}


        {loading && (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
            Loading...
          </div>
        )}


        {error && <p className="text-red-500 text-center">{error}</p>}


        {(data && data.length > 0 || Object.keys(data).length > 0) && (
          <div className="flex flex-col md:flex-row py-20">
            {/* image */}
            <div className="">
              <img src={data.imageUrl} alt="About Us" className="w-[40rem]" />
            </div>
            {/* image end */}

            <div className="ps-10 mt-8 md:mt-0">
              {/* tagline */}
              <Typography
                variant="strong"
                color="text-peach-red-100"
                className="mb-2 font-bold"
              >
                \{data.title}\
              </Typography>
              {/* tagline end */}

              {/* title */}
              <Typography
                variant="h2"
                color="text-dark-blue-100"
                className="text-5xl mb-4 mt-4"
              >
                One of the Fastest Way to Business Growth
              </Typography>
              {/* title end */}

              {/* description */}
              <Typography variant="bodycopy" className="text-lg leading-6">
                {data.desc}
              </Typography>
              {/* description end */}

              <div
                onClick={() => handleNavigation("/contact")}
                className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-4 cursor-pointer hover:bg-peach-red-10"
              >
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
