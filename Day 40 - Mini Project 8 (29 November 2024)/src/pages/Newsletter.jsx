import React, { useEffect } from "react";
import BlogListVertical from "../components/blog/BlogListVertical";
import HeaderSection from "../components/newsletter/HeaderSection";
import { useFetchData } from "../hooks/useFetchData";


function Newsletter() {
  const { data: blogs, error, loading } = useFetchData();

  return (
    <div>
      <HeaderSection />
      <div className="mt-16">
        <h2 className="text-black-cstm dark:text-white text-2xl font-semibold py-4">
          All blog posts
        </h2>
        <div className="mt-4">
          {loading && (
            <div className="flex justify-center h-screen">
              <div className="w-5 h-5 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mr-2"></div>
              Loading...
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center h-screen">
              Error: {error}
            </div>
          )}

          {!loading && !error && !blogs && (
            <div className="text-center h-screen">No data found</div>
          )}

          {!loading && !error && blogs && blogs.length > 0 && <BlogListVertical blogs={blogs.slice(0, 3)} />}
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
