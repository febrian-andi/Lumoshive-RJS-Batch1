import React, { Component } from "react";
import { fetchGameDetail } from "../utils/api";
import NewsDetail from "./NewsDetail";

class NewsDetailContainer extends Component {
  state = {
    detail: {},
    loading: true,
  };

  componentDidMount() {
    this.fetchDetailData();
  }

  async fetchDetailData() {
    try {
      const data = await fetchGameDetail(this.props.newsKey);
      this.setState({ detail: data.results, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { detail, loading } = this.state;
    return (
      <>
        {loading ? (
          <p className="loader-container">
            <span className="loader"></span>
          </p>
        ) : (
          <NewsDetail data={detail} onSelect={this.props.onSelect} />
        )}
      </>
    );
  }
}

export default NewsDetailContainer;
