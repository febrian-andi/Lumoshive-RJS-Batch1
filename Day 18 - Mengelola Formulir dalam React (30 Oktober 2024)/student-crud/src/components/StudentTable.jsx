import React from "react";

export default function StudentTable({
  toogleModalForm,
  toogleModalDetail,
  students,
  onDelete
}) {
  return (
    <div className="table-responsive" style={{ minWidth: "100%" }}>
      <table className="table caption-top table-hover table-bordered">
        <caption>List of Student</caption>
        <thead>
          <tr>
            <th scope="col" className="p-3" colSpan="4">
              <button
                onClick={toogleModalForm}
                className="btn btn-primary float-end fw-bold"
              >
                <i className="bi bi-plus-circle" />
                Add New
              </button>
            </th>
          </tr>
          <tr className="table-info">
            <th scope="col" className="text-center">
              Number
            </th>
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              NIM
            </th>
            <th
              scope="col"
              className="text-center"
              style={{ minWidth: "150px" }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <th scope="row" className="text-center">
                {index + 1}
              </th>
              <td className="text-center">{student.name}</td>
              <td className="text-center">{student.nim}</td>
              <td className="text-center">
                <button
                  onClick={() => toogleModalDetail(student)}
                  className="btn btn-outline-primary btn-sm"
                >
                  <i className="bi bi-info-circle" />
                </button>
                <button
                  onClick={() => toogleModalForm(true, student)}
                  className="btn btn-outline-warning btn-sm"
                >
                  <i className="bi bi-pencil" />
                </button>
                <button 
                  onClick={() => onDelete(student.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
