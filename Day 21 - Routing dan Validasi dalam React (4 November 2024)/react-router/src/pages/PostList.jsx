import axios from "axios";
import React, { Component } from "react";
import PostItem from "../components/PostItem";

export default class PostList extends Component {
  state = {
    posts: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      firstPage: 1,
      lastPage: 1,
      nextPage: null,
      prevPage: null
    }
  };

  handleGetPosts = async (page = 1) => {
    try {
      const response = await axios.get(`http://localhost:3000/posts?_page=${page}&_per_page=7`);
      
      this.setState({
        posts: response.data.data,
        pagination: {
          currentPage: page,
          totalPages: response.data.pages,
          totalItems: response.data.items,
          firstPage: response.data.first,
          lastPage: response.data.last,
          nextPage: response.data.next,
          prevPage: response.data.prev
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  handlePageChange = (page) => {
    this.handleGetPosts(page);
  };

  componentDidMount() {
    this.handleGetPosts();
  }

  render() {
    const { posts, pagination } = this.state;

    return (
      <div>
        <h1 className="mb-4">Posts</h1>
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
        <div aria-label="Page navigation" className="mt-5">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${!pagination.prevPage ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => pagination.prevPage && this.handlePageChange(pagination.prevPage)}
                disabled={!pagination.prevPage}
              >
                <i className="bi bi-arrow-left"></i> Prev
              </button>
            </li>
            <li>
              <span className="page-link">{pagination.currentPage}</span>
            </li>
            <li className="page-item d-flex align-items-center">
              <span className="mx-2">/</span>
            </li>
            <li>
              <span className="page-link">{pagination.totalPages}</span>
            </li>
            <li className={`page-item ${!pagination.nextPage ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => pagination.nextPage && this.handlePageChange(pagination.nextPage)}
                disabled={!pagination.nextPage}
              >
                Next <i className="bi bi-arrow-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}