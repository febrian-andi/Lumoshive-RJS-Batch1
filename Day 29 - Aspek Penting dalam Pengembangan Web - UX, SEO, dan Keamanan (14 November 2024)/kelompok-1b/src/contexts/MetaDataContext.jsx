import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const MetaDataContext = createContext();

const useMetaData = (page) => useContext(MetaDataContext);

const MetaDataProvider = ({ children }) => {
  const metaData = {
    home: {
      title: "Home",
      description: "Welcome to our homepage where you can find information about our services, team, and more.",
      keywords: "home, welcome, services, company, team",
    },
    about: {
      title: "About",
      description: "Learn more about our company, mission, vision, and the team behind our success.",
      keywords: "about us, company, mission, vision, team",
    },
    services: {
      title: "Our Services",
      description: "Explore the wide range of services we offer, from web development to digital marketing solutions.",
      keywords: "web development, digital marketing, SEO, services",
    },
    portfolio: {
      title: "Portfolio",
      description: "View our portfolio of completed projects, showcasing our expertise and creativity.",
      keywords: "portfolio, projects, design, web development, case studies",
    },
    blog: {
      title: "Blog",
      description: "Stay updated with the latest news, insights, and trends in our industry.",
      keywords: "blog, news, updates, industry trends, articles",
    },
    contact: {
      title: "Contact",
      description: "Get in touch with us for inquiries, support, or collaboration opportunities.",
      keywords: "contact, get in touch, inquiries, support, collaboration",
    },
  };

  return (
    <MetaDataContext.Provider value={{ metaData }}>
      {children}
    </MetaDataContext.Provider>
  );
};

MetaDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MetaDataProvider, MetaDataContext, useMetaData };
