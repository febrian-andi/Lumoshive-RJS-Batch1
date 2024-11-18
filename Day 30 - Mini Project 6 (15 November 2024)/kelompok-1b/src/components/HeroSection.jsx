import React from "react";
import heroImage from "../assets/hero.png";
import Typography from "./Typography";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  // Function to handle navigation
    const handleNavigation = (path) => {
      navigate(path);
      window.scrollTo(0, 0);
    };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto py-[50px] px-4">
      <div className="flex flex-col justify-center mr-2">
        <Typography variant="h3" className="text-peach-red-100 mb-2.5">
          \ We Are Here \
        </Typography>
        <Typography
          variant="h1"
          className="text-dark-blue-100 mb-2.5 font-[48px]"
        >
          Better Insights For Business Growth
        </Typography>

        
          <button onClick={() => handleNavigation("/about")} className="bg-peach-red-100 text-white py-[10px] px-[20px] rounded-md w-fit hover:bg-red-600">
            View More
          </button>
        
      </div>
      <img src={heroImage} alt="hero-image" className="mt-8 md:mt-0" />
    </div>
  );
};

export default HeroSection;
