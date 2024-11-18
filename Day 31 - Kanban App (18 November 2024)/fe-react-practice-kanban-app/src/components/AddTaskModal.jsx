import React, { useState } from "react";
import useAddData from "../hooks/useAddData";

const AddTaskModal = ({ toggleModal, fetchData }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    tag: "",
    status: "backlog",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { addData } = useAddData("/tasks");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Task Data:", formData);
    addData(formData, () => {
      toggleModal();
      fetchData();
    });
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Start Date</label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">End Date</label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Tag</label>
            <select
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              className="select select-bordered"
              required
            >
              <option value="" disabled>
                Select Tag
              </option>
              <option>Development</option>
              <option>Testing</option>
              <option>Design</option>
            </select>
          </div>
          <div className="modal-action">
            <button onClick={toggleModal} className="btn">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
