import React, { createContext, useContext } from "react";

const SchemaContext = createContext();

const useSchema = (page) => useContext(SchemaContext);

const SchemaProvider = ({ children }) => {
  const Schema = {
    home: {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Logoipsum Agency",
      url: "https://kelompok-1b.vercel.app",
      logo: "https://kelompok-1b.vercel.app/logoipsum-logo.png",
      description:
        "Logoipsum Agency is your go-to digital partner, offering innovative solutions in web design, development, and marketing.",
    },
    about: {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Logoipsum Agency",
      description:
        "At Logoipsum Agency, we are passionate about providing impactful and scalable digital solutions that empower businesses to succeed online.",
      url: "https://kelompok-1b.vercel.app/about",
      logo: "https://kelompok-1b.vercel.app/logoipsum-logo.png",
    },
    services: {
      "@context": "http://schema.org",
      "@type": "Service",
      serviceType: "Web Development",
      provider: {
        "@type": "Organization",
        name: "Logoipsum Agency",
        url: "https://kelompok-1b.vercel.app/services",
        logo: "https://kelompok-1b.vercel.app/logoipsum-logo.png",
      },
      areaServed: "Global",
      availableLanguage: "English",
      description:
        "We offer tailored web development services, helping businesses create user-friendly, responsive websites that drive engagement and growth.",
    },
    portfolio: {
      "@context": "http://schema.org",
      "@type": "CreativeWork",
      name: "Logoipsum Agency Portfolio",
      description:
        "Discover our diverse portfolio of cutting-edge web development projects. We deliver exceptional digital experiences for clients across industries.",
      url: "https://kelompok-1b.vercel.app/portfolio",
    },
    blog: {
      "@context": "http://schema.org",
      "@type": "Blog",
      name: "Logoipsum Agency Blog",
      description:
        "Our blog features insightful articles on web development, digital marketing, and the latest industry trends, keeping you informed and ahead of the curve.",
      url: "https://kelompok-1b.vercel.app/blog",
      publisher: {
        "@type": "Organization",
        name: "Logoipsum Agency",
        logo: "https://kelompok-1b.vercel.app/logoipsum-logo.png",
      },
    },
    contact: {
      "@context": "http://schema.org",
      "@type": "ContactPage",
      name: "Contact Logoipsum Agency",
      description:
        "Get in touch with us for inquiries, project discussions, or to learn more about how we can assist with your web development needs.",
      url: "https://kelompok-1b.vercel.app/contact",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 23578 27867",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
  };
  return (
    <SchemaContext.Provider value={{ Schema }}>
      {children}
    </SchemaContext.Provider>
  );
};

export { SchemaProvider, SchemaContext, useSchema };
