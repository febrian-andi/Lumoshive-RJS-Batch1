import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import LoadingMessage from "../components/LoadingMessage";
import { queryAI } from "../utils/api";

const ChatContainer = ({ token, setToken }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const handleQuery = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await queryAI({ query }, token);
      setMessages((prevMessages) => [
        ...prevMessages,
        { query, data: res }
      ]);
      setQuery("");
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      <Navbar setToken={setToken} handleLogout={handleLogout} />
      {loading && <LoadingMessage />}
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          query={message.query}
          message={message.data.data}
        />
      ))}
      <ChatInput
        onChange={handleChange}
        onSubmit={handleQuery}
        loading={loading}
        query={query}
      />
    </div>
  );
};

export default ChatContainer;