import React from "react";
import BlogPostsSection from "../components/blog/BlogPostsSection";

function Blog() {
  return (
    <div className="space-y-8">
      <div className="border-b-2">
        <h1 className="text-black-cstm dark:text-white text-[70px] md:text-[150px] lg:text-[160px] xl:text-[200px] 2xl:text-[240px] text-center font-bold pb-4">
          THE BLOG
        </h1>
      </div>
      <BlogPostsSection />
    </div>
  );
}

export default Blog;
