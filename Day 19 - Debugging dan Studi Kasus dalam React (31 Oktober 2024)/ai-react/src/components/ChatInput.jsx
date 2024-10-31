import React from "react";

export default function ChatInput() {
  return (
    <form className="fixed-bottom p-3 bg-primary-light-subtle border-top shadow">
      <div className="input-group container">
        <input
          type="text"
          className="form-control border border-primary"
          placeholder="Message LumoshiveAI"
        />
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-arrow-bar-up"></i>
        </button>
      </div>
    </form>
  );
}
