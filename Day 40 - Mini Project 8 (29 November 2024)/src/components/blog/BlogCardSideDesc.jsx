import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function BlogCardSideDesc({ lineClampDesc=3, imageHeight=52, blog={} }) {
  
  if (Object.keys(blog).length === 0) {
    return (
      <div className="text-center font-semibold">No data found</div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <img
        src={blog.thumb}
        alt="Blog post image"
        className={`w-full h-${imageHeight} object-cover`}
      />
      <div className="space-y-3">
        <p className="text-purple-cstm-200 font-semibold text-sm">
          {blog.author} • {blog.time}
        </p>
        <Link to={`/blog/${blog.key}`} className="grid grid-cols-7 text-black-cstm dark:text-white hover:text-blue-500 hover:bg-purple-cstm-100 dark:hover:text-blue-500 dark:hover:bg-purple-cstm-100">
          <h2 className="text-xl font-bold col-span-6 line-clamp-2">
            {blog.title}
          </h2>
          <div className="flex justify-end">
            <ArrowUpRight size={24} />
          </div>
        </Link>
        <p className={`text-gray-cstm line-clamp-${lineClampDesc}`}>
          {blog.desc}
        </p>
        <div className="flex gap-4">
          <p className="bg-purple-cstm-100 text-purple-cstm-200 text-sm rounded-full px-3 py-1">
            {blog.tag}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCardSideDesc;
