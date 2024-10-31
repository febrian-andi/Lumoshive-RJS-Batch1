import React from "react";

export default function ChatMessage() {
  return (
    <div className="container">
      <div className="d-flex justify-content-end chat-message-cstm">
        <div className="p-3 border shadow-sm rounded-user-cstm bg-primary-subtle">
          <i className="bi bi-person-circle text-primary me-2"></i>
          <strong>Question:</strong> Hello LumoshiveAI
        </div>
      </div>
      <div className="d-flex justify-content-start chat-message-cstm">
        <div className="p-3 border shadow-sm rounded-ai-cstm bg-primary-subtle">
            <i className="bi bi-robot me-2"></i>
            <strong>Answer:</strong>
            <div>
                Hello
            </div>
        </div>
      </div>
    </div>
  );
}
