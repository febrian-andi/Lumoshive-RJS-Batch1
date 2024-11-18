import React from "react";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";
import DetailComponent from "../components/DetailComponent";



const BlogDetail = () => {
  return (
    <>
      <BannerSection title={"Blog"} breadCrumb={"Home / Blogs / Detail"} />
      <div className="bg-peach-red-10">
        <DetailComponent />
      </div>
      <QuoteCard />
    </>
  );
};

export default BlogDetail;
