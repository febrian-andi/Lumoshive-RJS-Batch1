import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import useTimer from "../hooks/useTimer";

const ActivityDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  const { id } = useParams();

  const { data, loading, error } = useFetchData(
    `http://localhost:3000/activities/${id}`
  );

  const { time, startTimer, stopTimer, resetTimer } = useTimer();

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-danger text-center">Error: {error}</p>;
  }
  
  return (
    <div className="mt-4">
      <h2 className="text-primary">{data?.title}</h2>
      <p className="text-muted">
        {data?.description}
      </p>
      <div className="card border-primary my-4">
        <div className="card-body">
          <p className="card-text">Time Spent: {time} seconds</p>
          <div className="btn-group">
            <button onClick={startTimer} className="btn btn-outline-success">
              <i className="bi bi-play-fill"></i> Start
            </button>
            <button onClick={stopTimer} className="btn btn-outline-warning">
              <i className="bi bi-pause-fill"></i> Stop
            </button>
            <button onClick={resetTimer} className="btn btn-outline-danger">
              <i className="bi bi-arrow-counterclockwise"></i> Reset
            </button>
          </div>
        </div>
      </div>
      <button onClick={handleBack} className="btn btn-secondary mt-3">
        <i className="bi bi-arrow-left"></i> Back to List
      </button>
    </div>
  );
};

export default ActivityDetail;
