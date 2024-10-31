import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import LoadingMessage from "../components/LoadingMessage";
import { queryAI } from "../utils/api";

export default class ChatContainer extends Component {
  state = {
    messages: [],
    loading: false,
    error: null,
    query: "",
  };

  handleQuery = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({
      loading: true,
      error: null,
    });

    queryAI({ query }, this.props.token)
      .then((res) => {
        this.setState({
          messages: [...this.state.messages, { query, data: res }],
          query: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: error.response.data.error,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.setToken(null);
  };

  render() {
    return (
      <div>
        <Navbar
          setToken={this.props.setToken}
          handleLogout={this.handleLogout}
        />
        {this.state.loading && <LoadingMessage />}
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            query={message.query}
            message={message.data.data}
          />
        ))}
        <ChatInput
          onChange={this.handleChange}
          onSubmit={this.handleQuery}
          loading={this.state.loading}
          query={this.state.query}
        />
      </div>
    );
  }
}
