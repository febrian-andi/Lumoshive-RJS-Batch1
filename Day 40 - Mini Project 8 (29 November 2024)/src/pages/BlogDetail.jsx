import React, { useEffect } from "react";
import BlogListVertical from "../components/blog/BlogListVertical";
import BlogListHorizontal from "../components/blog/BlogListHorizontal";
import HeaderSection from "../components/newsletter/HeaderSection";
import { useLocation } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

function BlogDetail() {
  const location = useLocation();
  const key = location.pathname.replace("/blog/", "");

  const { data: blogs, error: blogsError, loading: blogsLoading } = useFetchData();
  const { data: currentBlog, error: currentBlogError, loading: currentBlogLoading } = useFetchData(key);

  if (blogsLoading || currentBlogLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-5 h-5 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mr-2"></div>
        Loading...
      </div>
    );
  }

  if (blogsError || currentBlogError) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="hidden lg:block">
        <BlogListVertical forDetail={true} blogs={blogs.slice(0, 5)} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <p className="text-purple-cstm-200 text-sm font-semibold">
          {currentBlog.results.date}
        </p>
        <h1 className="text-black-cstm text-4xl font-bold">
          {currentBlog.results.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: currentBlog.results.content }}></div>
        <div className="py-20">
          <HeaderSection />
        </div>
      </div>
      <div className="block lg:hidden mt-10">
        <BlogListHorizontal blogs={blogs.slice(0, 5)}/>
      </div>
    </div>
  );
}

export default BlogDetail;
