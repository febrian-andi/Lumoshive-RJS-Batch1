import React from "react";
import Markdown from "react-markdown";

export default function ChatMessage({ message, query }) {
  return (
    <div className="container">
      <div className="d-flex justify-content-end chat-message-cstm">
        <div className="p-3 border shadow-sm rounded-user-cstm bg-primary-subtle">
          <i className="bi bi-person-circle text-primary me-2"></i>
          <strong>Question:</strong> {query}
        </div>
      </div>
      <div className="d-flex justify-content-start chat-message-cstm">
        <div className="p-3 border shadow-sm rounded-ai-cstm bg-primary-subtle">
            <i className="bi bi-robot me-2"></i>
            <strong>Answer:</strong>
            <div>
              <Markdown>
                {message}
              </Markdown>
            </div>
        </div>
      </div>
    </div>
  );
}
