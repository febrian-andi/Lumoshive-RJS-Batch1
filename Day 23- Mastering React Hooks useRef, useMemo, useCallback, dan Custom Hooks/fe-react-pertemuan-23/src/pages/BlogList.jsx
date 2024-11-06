import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';

const BlogList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get('page')) || 1;
  const perPage = 5;

  const { data, loading, error } = useFetchData(`http://localhost:3000/posts?_page=${page}&_per_page=${perPage}`);

  const handlePageChange = (newPage) => {
    navigate(`?page=${newPage}`);
  };

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!data || !data.data) {
    return (
      <div className="container my-5">
        <p>No posts found</p>
      </div>
    );
  }

  const { data: posts, next, prev } = data;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <section className="row">
        {posts.map((post) => (
          <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-decoration-none">
              <div className="card h-100 shadow-sm">
                <img
                  src={post.img}
                  className="card-img-top img-cstm"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.desc}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => handlePageChange(prev)}
          disabled={prev === null}
        >
          <i className="bi bi-arrow-left"></i> Previous
        </button>
        <div className="mx-3 d-flex align-items-center">
          Page {page}
        </div>
        <button
          className="btn btn-outline-primary"
          onClick={() => handlePageChange(next)}
          disabled={next === null}
        >
          Next <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BlogList;
