import React from "react";
import BlogCardBottomDesc from "./BlogCardBottomDesc";

function BlogListVertical({ forDetail = false, blogs = [] }) {
  return (
    <div
      className={`grid grid-cols-1 gap-8 ${
        forDetail ? "" : "md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {blogs.map((blog) => (
        <BlogCardBottomDesc key={blog.key} blog={blog} />
      ))}
    </div>
  );
}

export default BlogListVertical;
