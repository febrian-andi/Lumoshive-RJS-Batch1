import React, { Component } from "react";
import NewsListContainer from "./components/NewsListContainer";
import NewsDetailContainer from "./components/NewsDetailContainer";

export default class App extends Component {
  state = {
    selectedNewsKey: null,
  };

  handleSelectNews = (key) => {
    // console.log(key);
    this.setState({ selectedNewsKey: key });
  };

  render() {
    return (
      <div>
        {this.state.selectedNewsKey ? (
          <NewsDetailContainer newsKey={this.state.selectedNewsKey} onSelect={this.handleSelectNews}/>
        ) : (
          <NewsListContainer onSelect={this.handleSelectNews} />
        )}
      </div>
    );
  }
}
