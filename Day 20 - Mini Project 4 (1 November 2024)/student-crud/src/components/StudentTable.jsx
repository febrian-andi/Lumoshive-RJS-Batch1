import React from "react";

function Loading() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status"></div>
      <p>Loading...</p>
    </div>
  );
}

function Error({ message }) {
  return (
    <div className="d-flex justify-content-center text-danger">{message}</div>
  );
}

function StudentRow({ student, index, onDelete, toogleModalForm, toogleModalDetail }) {
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{student.nim}</td>
      <td>{student.name}</td>
      <td>{student.class}</td>
      <td className="text-center">
        <button
          onClick={() => toogleModalDetail(student)}
          className="neo-button btn-detail"
        >
          <i className="bi bi-eye"></i>
        </button>
        <button
          onClick={() => toogleModalForm(true, student)}
          className="neo-button btn-update mx-2 my-2 my-md-0"
        >
          <i className="bi bi-pencil"></i>
        </button>
        <button
          onClick={() => onDelete(student.id)}
          className="neo-button btn-delete"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

function StudentTableContent({ students, onDelete, toogleModalForm, toogleModalDetail }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">NIM</th>
            <th className="text-center">Name</th>
            <th className="text-center">Class</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={index}
              student={student}
              index={index}
              onDelete={onDelete}
              toogleModalForm={toogleModalForm}
              toogleModalDetail={toogleModalDetail}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StudentTable({ students, loading, error, onDelete, toogleModalForm, toogleModalDetail }) {
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (students.length === 0) return <Error message="No data found" />;
  return <StudentTableContent students={students} onDelete={onDelete} toogleModalForm={toogleModalForm} toogleModalDetail={toogleModalDetail}/>;
}
