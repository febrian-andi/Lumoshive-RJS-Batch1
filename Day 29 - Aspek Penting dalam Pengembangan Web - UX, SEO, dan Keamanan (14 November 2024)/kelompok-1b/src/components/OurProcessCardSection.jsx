import React from "react";
import designIcon from "../assets/design.png";
import developIcon from "../assets/develop.png";
import researchIcon from "../assets/research.png";
import testIcon from "../assets/test.png";
import OurProcessCard from "./OurProcessCard";
import Typography from "./Typography";

const data = [
  {
    title: "Research",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: researchIcon,
    index: "01",
  },
  {
    title: "Design",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: designIcon,
    index: "02",
  },
  {
    title: "Develop",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: developIcon,
    index: "03",
  },
  {
    title: "Test",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: testIcon,
    index: "04",
  },
];

const OurProcessCardSection = () => {
  return (
    <section className="container mx-auto py-[100px] px-4">
      <div className="flex justify-center">
        <Typography
          variant="strong"
          className="text-center text-peach-red-100 mb-2.5 "
        >
          \ Planning \
        </Typography>
      </div>
      <Typography variant="h2" className="text-center text-dark-blue-100 mb-10">
        Our Process
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        {data.map((item) => (
          <OurProcessCard
            key={item.index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            index={item.index}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProcessCardSection;
