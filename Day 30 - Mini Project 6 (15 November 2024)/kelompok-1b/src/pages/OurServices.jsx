import React from "react";
import OurExperticeCardSection from "../components/OurExperticeCardSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";

const OurServices = () => {
  return (
    <div>
      <BannerSection title={"Services"} breadCrumb={"Home / Services"} />
      <WhatWeDoSection />
      <OurExperticeCardSection />
      <QuoteCard />
    </div>
  );
};

export default OurServices;
