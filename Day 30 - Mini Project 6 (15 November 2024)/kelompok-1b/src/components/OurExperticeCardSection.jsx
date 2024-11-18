import React from "react";
import Typography from "./Typography";
import OurProcessCard from "./OurProcessCard";
import webDesignIcon from "../assets/our-expertise-1.png";
import uiUxIcon from "../assets/our-expertise-2.png";
import migrationIcon from "../assets/our-expertise-3.png";
import appDevIcon from "../assets/our-expertise-4.png";
import integrationIcon from "../assets/our-expertise-5.png";
import emailMarketingIcon from "../assets/our-expertise-6.png";

const data = [
  {
    title: "Web Design/Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: webDesignIcon,
  },
  {
    title: "UI/UX Design",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: uiUxIcon,
  },
  {
    title: "Website Migration",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: migrationIcon,
  },
  {
    title: "App Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: appDevIcon,
  },
  {
    title: "Hubspot Integration",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: integrationIcon,
  },
  {
    title: "Email Marketing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: emailMarketingIcon,
  },
];

const OurExperticeCardSection = () => {
  return (
    <section className="container mx-auto py-[100px] px-4">
      <div className="flex justify-center">
        <Typography
          variant="strong"
          className="text-center text-peach-red-100 mb-2.5 "
        >
          \ Services \
        </Typography>
      </div>
      <Typography variant="h2" className="text-center text-dark-blue-100 mb-10">
        Our Expertice
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {data.map((item, index) => (
          <OurProcessCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default OurExperticeCardSection;
