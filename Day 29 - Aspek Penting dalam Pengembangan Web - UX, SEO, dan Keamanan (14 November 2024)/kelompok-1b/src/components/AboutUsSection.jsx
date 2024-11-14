import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/AssetsAboutPages/Icon.svg";
import MaskGroup from "../assets/AssetsAboutPages/MaskGroup.png";
import Typography from "./Typography";

export default function AboutUsSection() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-off-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row py-20">
          {/* image */}
          <div className="">
            <img src={MaskGroup} alt="About Us" className="w-[40rem]" />
          </div>
          {/* image end */}

          <div className="ps-10 mt-8 md:mt-0">
            {/* tagline */}
            <Typography
              variant="strong"
              color="text-peach-red-100"
              className="mb-2 font-bold"
            >
              \About Us\
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
              It is a long established fact that a reader will be distracted by
              the <br /> readable content of a page when looking at its layout.
              The point of <br /> using Lorem Ipsum is that it has a
              more-or-less normal distribution <br /> of letters, as opposed.
            </Typography>
            {/* description end */}

            <div
              onClick={() => handleNavigation("/contact")}
              className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-4 cursor-pointer hover:bg-peach-red-10"
            >
              <div className="bg-off-white px-3 py-2 rounded-[10px] flex items-center">
                <img src={Icon} className="w-[25px]" />
              </div>

              {/* contact */}
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
              {/* contact end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
