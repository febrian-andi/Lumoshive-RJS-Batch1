import React from "react";
import LatestPostSection from "../components/LatestPostSection";
import BannerSection from "../components/BannerSection";
import BlogListCard from "../components/BlogListCard";
import QuoteCard from "../components/QuoteCard";

const Blog = () => {
  return (
    <>
      {/* send props for change title and bread crumb */}
      <BannerSection title="Blogs" breadCrumb="Home / Blogs" />
      <LatestPostSection />
      <BlogListCard />
      <QuoteCard />
    </>
  );
};

export default Blog;
