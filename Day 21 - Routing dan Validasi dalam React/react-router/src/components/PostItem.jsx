import React from "react";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  return (
    <article className="mb-5">
      <h2>
        <Link to={`/posts/${post.id}`} className="post-link">
          {post.title}
        </Link>
      </h2>
      <p>{post.desc}</p>
    </article>
  );
}
