import React, { useState } from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import useFetchData from "../hooks/useFetchData";
import useDeleteData from "../hooks/useDeleteData";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const { fetchData, data, loading, error } = useFetchData(
    "http://localhost:3000/activities"
  );

  const { deleteData, loading: loadingDelete } = useDeleteData();

  const handleDeleteData = (id) => {
    deleteData(`http://localhost:3000/activities/${id}`, fetchData);
  };

  return (
    <div>
      <h1 className="my-4">Daily Activity Manager</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Add Activity
      </button>
      <ActivityList activities={data} loading={loading} error={error} loadingDelete={loadingDelete} onDelete={handleDeleteData}/>
      <ActivityForm showModal={showModal} setShowModal={setShowModal} fetchData={fetchData}/>
    </div>
  );
};

export default Home;
