import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import client1Img from "../assets/client-1.png";
import client2Img from "../assets/client-2.png";

const testimonials = [
  {
    clientImg: client1Img,
    testimony:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    clientName: "Samual Karl",
    clientRole: "CEO",
  },
  {
    clientImg: client1Img,
    testimony:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    clientName: "Samual Karl",
    clientRole: "CEO",
  },
  {
    clientImg: client2Img,
    testimony:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    clientName: "Daria Linney",
    clientRole: "CEO",
  },
  {
    clientImg: client2Img,
    testimony:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    clientName: "Daria Linney",
    clientRole: "CEO",
  },
];

const TestimonialCardSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="py-[100px]">
      <Typography
        variant="h3"
        className="text-center text-peach-red-100 mb-2.5"
      >
        \ From our Customers \
      </Typography>
      <Typography variant="h2" className="text-center text-dark-blue-100 mb-10">
        Testimonials
      </Typography>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={2.05}
        centeredSlides={true}
        pagination={{ clickable: true }}
        initialSlide={1}
        loop
        onSlideChange={handleSlideChange}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.05,
            spaceBetween: 30,
          },
        }}
        className="w-full swiper-cstm"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`transition-all duration-500 ${
                activeIndex === index ? "scale-100 blur-0" : "scale-90 blur-sm"
              }`}
            >
              <TestimonialCard
                clientImg={item.clientImg}
                testimony={item.testimony}
                clientName={item.clientName}
                clientRole={item.clientRole}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialCardSection;
