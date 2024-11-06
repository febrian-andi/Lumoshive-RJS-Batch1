import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import useFetchData from "../hooks/useFetchData";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: post, loading, error } = useFetchData(`http://localhost:3000/posts/${id}`);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container my-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      <div className="card shadow-sm p-4">
        <img src={post.img} alt="Post image" className="card-img-top" />
        <h1 className="card-title text-center">{post.title}</h1>
        <p className="card-text text-muted text-center">{post.desc}</p>
        <hr />
        <div className="card-body">{parse(post.content)}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
