import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostItem from "../components/PostItem";

export default class Home extends Component {
  state = {
    posts: [],
  };

  handleGetPosts = async () => {
    const response = await axios.get("http://localhost:3000/posts?_limit=4");
    try {
      // console.log(response.data);
      this.setState({ posts: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.handleGetPosts();
  }
  render() {
    return (
      <div>
        <h1 className="blog-title">
          Mingalaba <i className="bi bi-rss text-warning"></i>
        </h1>
        <p className="blog-description mb-4">
          AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro
          blog theme. This theme follows best practices and provides
          accessibility out of the box. Light and dark mode are supported by
          default. Moreover, additional color schemes can also be configured.
        </p>

        <p className="mb-4">
          Read the blog posts or check
          <a href="#" className="post-link">
            README
          </a>
          for more info.
        </p>

        <div className="social-links mb-5">
          <a href="#">
            <i className="bi bi-github"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <div className="recent-posts">
          <h2 className="mb-4">Recent Posts</h2>
          {this.state.posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/posts" className="post-link">
            All Posts <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    );
  }
}
