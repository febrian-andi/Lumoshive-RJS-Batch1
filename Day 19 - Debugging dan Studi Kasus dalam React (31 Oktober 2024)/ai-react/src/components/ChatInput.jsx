import React from "react";

export default function ChatInput({ onChange, onSubmit, loading, query }) {
  return (
    <form onSubmit={onSubmit} className="fixed-bottom p-3 bg-primary-light-subtle border-top shadow">
      <div className="input-group container">
        <input
          type="text"
          className="form-control border border-primary"
          placeholder="Message LumoshiveAI"
          onChange={onChange}
          value={query}
          disabled={loading}
          required
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          <i className="bi bi-arrow-bar-up"></i>
        </button>
      </div>
    </form>
  );
}
