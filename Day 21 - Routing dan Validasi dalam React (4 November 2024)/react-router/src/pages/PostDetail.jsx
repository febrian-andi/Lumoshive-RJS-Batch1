import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

class PostDetail extends Component {
  state = {
    post: null,
  };

  handleGetDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/posts/${this.props.id}`
      );
      console.log(response.data);
      this.setState({ post: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.handleGetDetail();
  }

  render() {
    const { post } = this.state;

    if (!post) return <p>Loading...</p>;

    return (
      <div className="container blog-content">
        <div className="mb-4">
          <button onClick={this.props.goBack} className="btn post-link">
          <i className="bi bi-arrow-left"></i> Go back
          </button>
        </div>

        <article>
          <h1 className="post-title mb-3">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </article>
      </div>
    );
  }
}

export default function PostDetailWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return <PostDetail id={id} goBack={goBack} />;
}
