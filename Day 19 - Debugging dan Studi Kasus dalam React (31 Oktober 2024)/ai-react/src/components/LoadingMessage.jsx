import React from "react";

export default function LoadingMessage() {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-light-subtle">
      <div className="spinner-border text-primary">
      </div>
      <p>
        <i className="bi bi-robot me-2"></i> Lumoshive AI is thinking...
      </p>
    </div>
  );
}