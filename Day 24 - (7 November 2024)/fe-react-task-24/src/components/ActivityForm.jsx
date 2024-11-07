import React from "react";
import { Modal, Button } from "react-bootstrap";
import useFormInput from "../hooks/useFormInput";
import useAddData from "../hooks/useAddData";

const ActivityForm = ({ showModal, setShowModal, fetchData }) => {
  const { values, handleChange, resetForm } = useFormInput({
    title: "",
    description: "",
  });

  const { addData, loading, error } = useAddData(
    "http://localhost:3000/activities"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    addData(values, () => {
      fetchData();
      resetForm();
      handleClose();
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-danger">{error}</p>}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="description"
              value={values.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Button variant="primary" type="submit" disabled={loading}>
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ActivityForm;
