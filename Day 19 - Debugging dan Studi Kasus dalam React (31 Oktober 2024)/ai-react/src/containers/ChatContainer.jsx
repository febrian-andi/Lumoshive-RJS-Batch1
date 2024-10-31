import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

export default class ChatContainer extends Component {
  render() {
    return (
      <div>
        <Navbar setToken={this.props.setToken} />
        <ChatMessage />
        <ChatInput />
      </div>
    );
  }
}
