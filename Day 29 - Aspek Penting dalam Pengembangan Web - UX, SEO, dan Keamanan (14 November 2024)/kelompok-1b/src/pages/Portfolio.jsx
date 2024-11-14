import React from "react";
import OurWorkSection from "../components/OurWorkSection";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";
import SearchEngineOptimization from "../components/SearchEngineOptimization";

const Portfolio = () => {
  return (
    <>
      <SearchEngineOptimization page="portfolio" />
      <div>
        {/* send props for change title and bread crumb */}
        <BannerSection title="Portofolio" breadCrumb="Home / Portofolio" />
        <OurWorkSection />
        <QuoteCard />
      </div>
    </>
  );
};

export default Portfolio;
