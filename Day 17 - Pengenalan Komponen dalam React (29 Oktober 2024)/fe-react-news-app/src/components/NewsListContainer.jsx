import React, { Component } from "react";
import NewsList from "./NewsList";
import { fetchGame } from "../utils/api";

class NewsListContainer extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchNewsData();
  }

  async fetchNewsData() {
    try {
      const data = await fetchGame();
      this.setState({ news: data, loading: false });
      // console.log(data);
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { news, loading } = this.state;

    return (
      <div>
        <h1 className="list-container-title">News List</h1>
        {loading ? (
          <p className="loader-container">
            <span className="loader"></span>
          </p>
        ) : (
          <NewsList news={news} onSelect={this.props.onSelect} />
        )}
      </div>
    );
  }
}

export default NewsListContainer;
