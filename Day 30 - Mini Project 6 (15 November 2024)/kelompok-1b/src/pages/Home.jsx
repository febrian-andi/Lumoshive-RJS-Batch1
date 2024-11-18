import React from "react";
import AboutUsSection from "../components/AboutUsSection";
import BlogListCard from "../components/BlogListCard";
import GetInTouchSection from "../components/GetInTouchSection";
import HeroSection from "../components/HeroSection";
import OurExperticeCardSection from "../components/OurExperticeCardSection";
import OurProcessCardSection from "../components/OurProcessCardSection";
import TeamSection from "../components/TeamCard";
import TestimonialCardSection from "../components/TestimonialCardSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import QuoteCard from "../components/QuoteCard";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutUsSection />
      <OurProcessCardSection />
      <WhatWeDoSection showButton />
      <OurExperticeCardSection />
      <div className="bg-off-white pt-10 pb-20">
        <TeamSection maxMembers={4} />
      </div>
      <TestimonialCardSection />
      <div className="bg-dark-blue-100">
        <GetInTouchSection titleColor="text-white" />
      </div>
      <BlogListCard maxPosts={3} />
      <QuoteCard />
    </div>
  );
};

export default Home;
