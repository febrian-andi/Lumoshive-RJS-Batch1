import React from "react";
import BannerSection from "../components/BannerSection";
import AboutUsSection from "../components/AboutUsSection";
import TeamCard from "../components/TeamCard";
import QuoteCard from "../components/QuoteCard";

const About = () => {
  return (
    <>
      {/* send props for change title and bread crumb */}
      <BannerSection title={"About Us"} breadCrumb={"Home / About Us"} />
      <AboutUsSection />
      <TeamCard />
      <QuoteCard />
    </>
  );
};

export default About;
