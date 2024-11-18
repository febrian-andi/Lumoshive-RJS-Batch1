import React, { useState } from "react";
import Typography from "./Typography";
import ourWork1 from "../assets/our-work-1.png";
import ourWork2 from "../assets/our-work-2.png";
import ourWork3 from "../assets/our-work-3.png";
import ourWork4 from "../assets/our-work-4.png";
import ourWork5 from "../assets/our-work-5.png";

const imageData = [
  { src: ourWork1, category: "LIFE" },
  { src: ourWork2, category: "MOMENTS" },
  { src: ourWork3, category: "NATURE" },
  { src: ourWork4, category: "STORIES" },
  { src: ourWork5, category: "TRAVEL" },
];

const OurWorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "ALL"
      ? imageData
      : imageData.filter((image) => image.category === selectedCategory);

  return (
    <section className="container mx-auto py-[100px] px-4">
      <Typography
        variant="h3"
        className="text-center text-peach-red-100 mb-2.5"
      >
        \ Portfolio \
      </Typography>
      <Typography variant="h2" className="text-center text-dark-blue-100 mb-10">
        Our Work
      </Typography>

      <div className="flex justify-center flex-wrap mb-10">
        {["ALL", "LIFE", "MOMENTS", "NATURE", "STORIES", "TRAVEL"].map(
          (category) => (
            <button
              key={category}
              className={`px-[18px] py-[9px] ${selectedCategory === category ? "bg-peach-red-100" : "border border-black-shade opacity-50"}`}
              style={{
                borderRadius:
                  category === "ALL"
                    ? "5px 0 0 5px"
                    : category === "TRAVEL"
                      ? "0 5px 5px 0"
                      : "",
              }}
              onClick={() => setSelectedCategory(category)}
            >
              <Typography
                color={
                  selectedCategory === category
                    ? "text-white"
                    : "text-black-shade"
                }
                className="opacity-50 font-semibold"
              >
                {category}
              </Typography>
            </button>
          )
        )}
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-7 h-auto md:h-[416px]">
        {filteredImages.slice(0, 2).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`work-${index}`}
            className="w-full h-auto md:h-full md:w-auto"
          />
        ))}
      </div>

      <div className="flex flex-wrap  md:flex-nowrap gap-7 mt-7 h-auto md:h-[416px]">
        {filteredImages.slice(2).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`work-${index}`}
            className="w-full h-auto md:h-full md:w-auto"
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="rounded-md bg-peach-red-100 px-[18px] py-[9px] hover:bg-red-600">
          <Typography color="text-white">Get In Touch</Typography>
        </button>
      </div>
    </section>
  );
};

export default OurWorkSection;
