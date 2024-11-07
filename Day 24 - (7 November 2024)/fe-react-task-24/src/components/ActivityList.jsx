import React from "react";
import { Link } from "react-router-dom";

const ActivityList = ({ activities, loading, error, loadingDelete, onDelete }) => {
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-danger text-center">Error: {error}</p>;
  }

  if (activities.length === 0) {
    return <p className="text-center">No activities found.</p>;
  }

  return (
    <ul className="list-group">
      {activities.map((activity, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center mb-2"
          key={index}
        >
          <span>{activity.title}</span>
          <div>
            <Link to={`/activity/${activity.id}`} className="btn btn-secondary btn-sm mx-1">Details</Link>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(activity.id)}
              disabled={loadingDelete}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
