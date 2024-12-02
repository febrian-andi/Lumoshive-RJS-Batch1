import React from "react";
import BlogCardBottomDesc from "./BlogCardBottomDesc";

function BlogListHorizontal({ blogs }) {
  return (
    <div className="w-full flex gap-5 overflow-x-scroll">
      {blogs.map((blog) => (
        <div key={blog.key} className="flex-shrink-0 w-80">
        <BlogCardBottomDesc blog={blog} />
      </div>
      ))}
    </div>
  );
}

export default BlogListHorizontal;
